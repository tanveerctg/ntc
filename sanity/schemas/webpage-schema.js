export default {
  name: 'webpage',
  type: 'document',
  title: 'Web Pages',
  fields: [
    {
      name: 'pageName',
      type: 'string',
      title: 'Page Name'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Page Slug',
      options: { source: 'pageName' }
    },
    {
      name: 'menuOrder',
      type: 'number',
      title: 'Menu Order (L to R)'
    },
    {
      name: 'headerImage',
      title: 'Header Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'alt',
          type: 'string',
        }
      ]
    },
    {
      name: 'content',
      title: 'Page Content',
      type: 'array',
      of: [
        {
          type: 'block',
          of: [
            {
              type: 'image'
            },
          ]
        },
        { type: 'image' }
      ]
    },
  ]
}