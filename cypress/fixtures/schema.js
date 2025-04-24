export const apiUserSchema = {
    type: 'object',
    properties: {
        page:       {type: 'number'},
        per_page:   {type: 'number'},
        total:      {type: 'number'},
        total_page: {type: 'number'},
        data:   {
            type: 'array',
            items: {
                id:             {type: 'number'},
                name:           {type: 'string'},
                year:           {type: 'number'},
                pantone_value:  {type: 'string'},
            }
        },
        support: {
            type: 'object',
            properties: {
                url:    {type: 'string'},
                text:   {type: 'string'},
            }
        }
    }
}

export const singleUserSchema = {
    type: 'object',
    properties: {
        data: {
            type: 'object',
            properties: {
                id:         {type: 'number'},
                email:      {type: 'string'},
                first_name: {type: 'string'},
                last_name:  {type: 'string'},
                avatar:     {type: 'string'},
            }
        },
        support:{
            type: 'object',
            properties: {
                url:    {type: 'string'},
                text:   {type: 'string'},
            }
        }
    }
}

export const listResourceSchema ={
    type: 'object',
    properties: {
        page:       {type: 'number'},
        per_page:   {type: 'number'},
        total:      {type: 'number'},
        total_page: {type: 'number'},
        data:   {
            type: 'array',
            items: {
                id:             {type: 'number'},
                name:           {type: 'string'},
                year:           {type: 'number'},
                color:          {type: 'string'},
                pantone_value:  {type: 'string'},
            }
        },
        support: {
            type: 'object',
            properties: {
                url:    {type: 'string'},
                text:   {type: 'string'},
            }
        }
    }
}

export const singleResourceSchema = {
    type: 'object',
    properties: {
        data: {
            type: 'object',
            properties: {
                id:         {type: 'number'},
                name:       {type: 'string'},
                year:       {type: 'number'},
                color:      {type: 'string'},
                pantone_value:     {type: 'string'},
            }
        },
        support:{
            type: 'object',
            properties: {
                url:    {type: 'string'},
                text:   {type: 'string'},
            }
        }
    }
}