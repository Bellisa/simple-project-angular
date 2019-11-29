export const ResTypesSchema = {
    id: '/ResTypesSchema',
    type: 'object',
    properties: {
      name: {
        type: 'string',
        required: true,
        message: {
          required: 'Name is required',
        }
      }
    }
  }