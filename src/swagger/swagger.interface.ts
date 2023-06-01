export interface SwaggerConfig {
    title: string;
    description: string;
    version: string;
    tags: string[];
    explorer?: boolean;
    swaggerOptions?: Record<string, any>;
    customCss?: string;
    customCssUrl?: string;
    customJs?: string;
    customfavIcon?: string;
    swaggerUrl?: string;
    customSiteTitle?: string;
    validatorUrl?: string;
    url?: string;
    urls?: Record<'url' | 'name', string>[];
}