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
