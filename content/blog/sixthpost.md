---
title: VacationMapper Capstone
description: This site uses Maptiler and Leaflet API to allow users to catalogue and connect locations along their vacation route. Users can also save up to three different routes using local storage caching.
date: 2026-04-13
tags: ["CSS", "Layout", "Web Development", "API", "Full Pipeline"]
---

Link to the site:
<a href="https://vacationmapper.netlify.app/">https://vacationmapper.netlify.app/</a>

Link to the repo:
<a href="https://github.com/curban2336/VacationMapper">https://github.com/curban2336/VacationMapper</a>

VacationMapper is a desktop Electron app for planning trips on an interactive map. You can search for places, drop markers for stops you care about, write notes for each stop, and draw links between markers to sketch travel routes.

## What the app does

- Search locations using a geocoding search bar.
- Add map markers from the currently selected searched location.
- Add notes to each marker in a popup.
- Remove markers.
- Link two markers with a line to represent a route/connection.
- Save and load map state using 3 local save slots.

<div class="code-block">

```js
if (actionButton) {
	actionButton.addEventListener("click", function () {
		// if (typeof selectedLat !== 'number' || typeof selectedLng !== 'number') {
		//     console.warn('No selected coordinates yet.', { selectedLat, selectedLng });
		//     return;
		// }
		AddMarker(selectedLat, selectedLng);
		// Hide button again
		this.style.display = "none";
	});
}

if (linkActionButton) {
	linkActionButton.addEventListener("click", function () {
		if (!selectedMarkerData) return;

		isLinkMode = true;
		linkStartMarkerData = selectedMarkerData;
		this.textContent = "Select 2nd Marker";
		if (info) {
			info.textContent =
				"Link mode enabled: click another marker to create a line.";
		}
	});
}

const AddMarker = (lat, lng, notes = "") => {
	if (typeof lat !== "number" || typeof lng !== "number") return;

	const leafletMarker = L.marker([lat, lng]).addTo(map);
	const markerData = { marker: leafletMarker, notes: notes || "" };
	markerList.push(markerData);

	leafletMarker.on("click", () => {
		selectedMarkerData = markerData;
		if (linkActionButton) {
			linkActionButton.style.display = "block";
		}

		if (
			isLinkMode &&
			linkStartMarkerData &&
			linkStartMarkerData !== markerData
		) {
			const startLatLng = linkStartMarkerData.marker.getLatLng();
			const endLatLng = markerData.marker.getLatLng();
			const polyLine = L.polyline([startLatLng, endLatLng]).addTo(map);

			lines.push({
				from: linkStartMarkerData,
				to: markerData,
				polyLine,
			});

			isLinkMode = false;
			linkStartMarkerData = null;
			if (linkActionButton) {
				linkActionButton.textContent = "Make Link";
			}
			if (info) {
				info.textContent = "Link created.";
			}
		}
	});

	const index = locationIndex++;
	const noteId = `note-${locationIndex}`;
	const removeID = `remove-${locationIndex}`;
	leafletMarker.bindPopup(`
                    <div>
                        <label for="${noteId}">Notes</label><br />
                        <textarea id="${noteId}" rows="10" cols="35" placeholder="Add a note..."></textarea><br />
                        <button id="${removeID}" class="map-action-button remove-marker-button" type="button">Remove</button>
                    </div>
                `);

	leafletMarker.on("popupopen", () => {
		const textarea = document.getElementById(noteId);
		const removeButton = document.getElementById(removeID);
		if (!textarea) return;
		textarea.value = markerData.notes;
		textarea.focus();
		textarea.addEventListener("input", () => {
			markerData.notes = textarea.value;
		});

		if (removeButton) {
			removeButton.addEventListener(
				"click",
				() => {
					map.removeLayer(leafletMarker);
					markerList = markerList.filter((item) => item !== markerData);
					lines.forEach((element) => {
						if (element.from === markerData || element.to === markerData) {
							map.removeLayer(element.polyLine);
							lines = lines.filter(
								(line) => line.from !== markerData && line.to !== markerData,
							);
						}
					});
					isLinkMode = false;
					linkStartMarkerData = null;
					linkActionButton.style.display = "none";
				},
				{ once: true },
			);
		}
	});
};
```

</div>

## Data persistence

- Marker and line data is saved in browser local storage inside the Electron app.
- Save slots are independent (`slot 1`, `slot 2`, `slot 3`).
- Clearing app storage clears saved map data.

<div class="code-block">

```js
 bindMenuAction('saveSlot1', () => {
                saveMarkers(1);
                saveLines(1);
                menuToggleButton.textContent = '☰';
            });
	...
	//Save Markers
            function saveMarkers(slotNumber) {
                if (![1, 2, 3].includes(slotNumber)) return;

                //Data object
                let data = [];

                //Iterate over each marker
                for (let i = 0; i < markerList.length; i++) {
                    const markerData = markerList[i];
                    data.push({
                        'location': markerData.marker.getLatLng(),
                        'notes': markerData.notes
                    });
                }

                //Last step, save to storage
                localStorage.setItem(`markers_slot_${slotNumber}`, JSON.stringify(data));
                if (info) {
                    info.textContent = `Saved ${data.length} marker(s) to Slot ${slotNumber}.`;
                }

            }
    ...
    //Save lines
            function saveLines(slotNumber) {
                if (![1, 2, 3].includes(slotNumber)) return;

                //Data object
                let data = [];

                //Iterate over each line
                for (let i = 0; i < lines.length; i++) {
                    const line = lines[i];
                    data.push({
                        'from': line.from.marker.getLatLng(),
                        'to': line.to.marker.getLatLng(),
                    });
                }

                //Last step, save to storage
                localStorage.setItem(`lines_slot_${slotNumber}`, JSON.stringify(data));
                if (info) {
                    info.textContent = `Saved ${data.length} line(s) to Slot ${slotNumber}.`;
                }

            }
```

</div>
