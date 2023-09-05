import { defineConfig } from "sanity";
import {deskTool} from 'sanity/desk' 
import {schemaTypes} from './sanity/schemas'

const config=defineConfig({

    projectId: 'y9e6hyu0',
    dataset: 'production',
    title: "Nicci Topping Casting Website",
    apiVersion: "2023-04-25",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {
        types: schemaTypes,
      },
})






export default config