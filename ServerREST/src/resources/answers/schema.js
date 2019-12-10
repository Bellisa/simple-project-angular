export const CreateAddressSchema = {
    id: '/CreateAddressSchema',
    type: 'object',
    properties: {
        id_question: {
        type: 'number',
        required: true,
        message: {
          required: 'Question ID is required',
        }
      },
      description_eng: {
        type: 'string',
        required: true,
        message: {
          maxLength: 'Question description is required',
        }
      },
      answer_eng: {
        type: 'string',
        required: true,
        message: {
          maxLength: 'Question answer is required',
        }
      },
    }
  }