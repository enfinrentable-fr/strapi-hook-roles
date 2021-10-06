'use strict';

module.exports = strapi => {

  return {
    /**
     * Default options
     * This object is merged to strapi.config.hook.settings.roles
     */
    defaults: {
      values: []
    },

    /**
     * Initialize the hook
     */
    async initialize() {
      console.log('Initialize ROLES ...');
      const { values } = {
        ...this.defaults,
        ...strapi.config.hook.settings.roles
      };

      for (const role of values) {
        const exist = await strapi.query('role', 'admin').findOne({name: role.name});
        if (! exist) {
          console.log('Create missing roles '+role.code);
          await strapi.query('role', 'admin').create(role)
        }
      }
    }
  }
}
