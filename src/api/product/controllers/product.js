'use strict';

/**
 *  product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product', ({ strapi }) => ({

    // Get one category from the database
    async findOne(ctx) {
        // get the category :id from /category/:id (its the slug :string)
        const { id } = ctx.params;

        console.log(id);

        // get the category from the database
        const entity = await strapi.entityService.findMany('api::product.product', {
            filters: { slug: id },
            populate: {
                categories: true
            },
        });

        // sanitize the category; [0] because findMany returns an array
        const sanitizedEntity = await this.sanitizeOutput(entity[0], ctx);

        // return the category
        return this.transformResponse(sanitizedEntity);
    }
}));
