# strapi-hook-roles

This hook allows creating new roles in Strapi

**Supported Strapi versions**

- v3.6.x

## Installation
```bash
# using yarn
yarn add https://github.com/enfinrentable-fr/strapi-hook-roles

# using npm
npm install https://github.com/enfinrentable-fr/strapi-hook-roles
```


## Hook config

To activate and configure the hook, you need to create or update the file ./config/hook.js in your strapi app.

```javascript
module.exports = {
    settings: {
      // ...
      roles: {
        enabled: true,
        values: [
            {
                name: 'My new Role',
                code: 'strapi-new-role',
                description: 'My description of the new role'
            },
            {
                name: 'My second new Role',
                code: 'strapi-new-second-role',
                description: 'My description of the new second role'
            }
        ]
      },
    }
  };
```

