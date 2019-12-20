# Inspacare [![Netlify Status](https://api.netlify.com/api/v1/badges/c3e739ab-d2e8-4002-9ab9-a9ca2b903ecc/deploy-status)](https://app.netlify.com/sites/inspacare/deploys)

The inspacare.com website

## Quick start

Install dependencies:

```bash
npm install
```

Copy the example environment variables and set them.

```bash
cp .example.env .env
```

Start the Hugo server with a default 1313 port

```bash
npm start
```

## CMS

This website uses the open source, git based [Netlify CMS](https://www.netlifycms.org/docs/).

### User management

Example requests can be found as a Postman collection in the `postman` folder.

Netlify Identity must be enabled in order for a new user to be registered.

To verify if Netlify Identity is enabled, make a request to the **GET /verify** endpoint.

If enabled, register a new user using the **POST /signup** endpoint.

The new user will receive a confirmation email with a link to confirm the email address.
When clicked, it will automatically verify the account and redirect to the admin area.

### Configuration options

All configuration options are specified in the `static/admin/config.yml` file.
More details about configuration options [can be found here](https://www.netlifycms.org/docs/configuration-options/).
