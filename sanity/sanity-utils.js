import { createClient, groq } from "next-sanity"
import clientConfig from "./config/client-config"

export async function getVideos() {

    return createClient(clientConfig).fetch(
        groq`*[_type=="youtube"]{
            _id,
            _createdAt,
            videoName,
            videoURL,
            category,
            subCategory,
            commercials
        }`
    )
}

export async function getPages() {
    return createClient(clientConfig).fetch(
        groq`*[_type=="webpage"]{
            _id,
            _createdAt,
            pageName,
            "slug":slug.current, 
            menuOrder   
        } | order(menuOrder asc)`
    )
}

export async function getPage(slug) {
    return createClient(clientConfig).fetch(
        groq`*[_type=="webpage" && slug.current ==$slug][0]{
            _id,
            _createdAt,
            pageName,
            "slug": slug.current,
            "headerImageURL":headerImage.asset -> url,
            "headerImageID":headerImage.asset -> _id,
            "headerImageAlt":headerImage.alt,
            content
        }`,
        { slug }
    )
}

