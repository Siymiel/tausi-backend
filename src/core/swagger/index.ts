import path from 'path';

const swaggerOptions2 = {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'Tausi API',
    description: 'Tausi REST API Developer Documentation',
    license: {
      name: 'UNLICENSED'
    }
  },
  security: {
    BasicAuth: {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT'
    }
  },
  baseDir: path.join(__dirname, '../../modules'),
  // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
  filesPattern: './**/*.ts',
  // URL where SwaggerUI will be rendered
  swaggerUIPath: '/docs',
  // Expose OpenAPI UI
  exposeSwaggerUI: true,
  // Expose Open API JSON Docs documentation in `apiDocsPath` path.
  exposeApiDocs: true,
  // Open API JSON Docs endpoint.
  apiDocsPath: '/v1/docs',
  // Set non-required fields as nullable by default
  notRequiredAsNullable: false,
  // You can customize your UI options.
  // you can extend swagger-ui-express config. You can checkout an example of this
  // in the `example/configuration/swaggerOptions.js`
  swaggerUiOptions: {
    DocumentTitle: 'Tausi App Docs'
  }
};

export { swaggerOptions2 };
