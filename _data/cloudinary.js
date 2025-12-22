/**
 * HAP Cloudinary Image Configuration
 *
 * All HAP poses with verified Cloudinary version numbers
 * Source: reports/hap-cloudinary-complete-inventory.md
 */

export default {
  cloudName: 'cynthia-teeters',
  baseUrl: 'https://res.cloudinary.com/chrisurban-portfolio/image/upload',

  // HAP poses with verified version numbers
  imgs: {
    'BossFight': { filename: 'BossFight', version: '1766025769' },
    'ShooterGameplay': { filename: 'ShooterGameplay', version: '1766025768' },
		'Favicon': { filename: 'Favicon', version: '1766279030' },
		'HeadShot': { filename: 'headshot', version: '1766279052' },
		'FunShot': { filename: 'FunShot', version: '1766288968' },
		'FunHelmetShot': { filename: 'FunHelmetShot', version: '1766287735' },
		'ELVTR-Course': { filename: 'ELVTR-Course', version: '1766289156' },
		'Hue': { filename: 'Hue', version: '1766364279' },
		'Sepia': { filename: 'Sepia', version: '1766364279' },
		'Twist': { filename: 'Twist', version: '1766364279' },
		'Invert': { filename: 'Invert', version: '1766364279' },
		'Blur': { filename: 'Blur', version: '1766364278' },
		'Highlight': { filename: 'Highlight', version: '1766367991' },
		'Motion': { filename: 'Motion', version: '1766369246' },
		'Timing': { filename: 'Timing', version: '1766369246' },
		'Desktop': { filename: 'Desktop', version: '1766372049' },
		'Tablet': { filename: 'Tablet', version: '1766372048' },
		'Phone': { filename: 'Phone', version: '1766372047' },
  },

  /**
   * Build Cloudinary URL for images
   * @param {string} imgName - Image file name.
   * @param {number} width - Width in pixels (80, 100, 120, 150, 200)
   * @returns {string} Full Cloudinary URL
   */
  getPortUrl(imgName, width = 150) {
    const img = this.imgs[imgName];
    if (!img) {
      throw new Error(`Unknown HAP pose: ${imgName}. Available poses: ${Object.keys(this.imgs).join(', ')}`);
    }

    return `${this.baseUrl}/f_auto,q_auto,w_${width},c_limit/v${img.version}/${img.filename}.png`;
  }
};
