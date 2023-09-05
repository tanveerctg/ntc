export default {
  name: 'youtube',
  type: 'document',
  title: 'You Tube',
  fields: [
    {
      name: 'videoName',
      type: 'string',
      title: 'Video Name'
    },
    {
      name: 'videoURL',
      type: 'string',
      title: 'Youtube URL'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Film', value: 'film' },
          { title: 'TV', value: 'tv' },
          { title: 'Game', value: 'game' },
          { title: 'Commercial', value: 'commercial' },
          { title: 'Short Film', value: 'short' },
        ],
      }
    },
    {
      name: 'subCategory',
      title: 'Sub-Category',
      type: 'string',
      options: {
        list: [
          // { title: 'All', value: 'all' },
          { title: 'Short Film', value: 'short_film' },
          { title: 'Music Video', value: 'music_video' },
          { title: 'Feature Film', value: 'feature_film' },
          { title: 'Childrens TV', value: 'tv_childrens' },
          { title: 'TV Drama', value: 'tv_drama' },
          { title: 'Financial Services', value: 'financial_services' },
          { title: 'Food & Beverage', value: 'food_beverage' },
          { title: 'Games & Entertainment', value: 'games_entertainment' },
          { title: 'Hair, Fashion & Beauty', value: 'hair_fashion-beauty' },
          { title: 'Health', value: 'health' },
          { title: 'Lifestyle & Sport', value: 'lifestyle_sport' },
          { title: 'Retail', value: 'retail' },
          { title: 'Telecoms & Tech', value: 'telecoms_technology' },
          { title: 'Short Film', value: 'short' },
        ],
      }
    },
    {
      name: 'agency',
      type: 'string',
      title: 'Agency'
    },
    {
      name: 'productionCompany',
      type: 'string',
      title: 'Production Company'
    },
    {
      name: 'director',
      type: 'string',
      title: 'Director'
    },
  ]
}

export const catsubcat =
  [
    { id: 14, catID: 'film', subcat: 'all', title: "All" },
    { id: 2, catID: 'film', subcat: 'music_video', title: "Music Video" },
    { id: 1, catID: 'film', subcat: 'short_film', title: "Short Film" },
    { id: 15, catID: 'film', subcat: 'feature_film', title: "Feature Film" },
    { id: 16, catID: 'commercials', subcat: 'all', title: "All" },
    { id: 3, catID: 'commercials', subcat: 'financial_services', title: "Financial Services" },
    { id: 4, catID: 'commercials', subcat: 'food_beverage', title: "Food Beverage" },
    { id: 5, catID: 'commercials', subcat: 'games_entertainment', title: "Games Entertainment" },
    { id: 6, catID: 'commercials', subcat: 'hair_fashion-beauty', title: "Hair, Fashion Beauty" },
    { id: 7, catID: 'commercials', subcat: 'health', title: "Health" },
    { id: 8, catID: 'commercials', subcat: 'lifestyle_sport', title: "Lifestyle Sport" },
    { id: 9, catID: 'commercials', subcat: 'retail', title: "Retail" },
    { id: 10, catID: 'commercials', subcat: 'telecoms_technology', title: "Telecoms & Technology" },
    { id: 13, catID: 'tv', subcat: 'all', title: "All" },
    { id: 11, catID: 'tv', subcat: 'tv_childrens', title: "Children's TV" },
    { id: 12, catID: 'tv', subcat: 'tv_drama', title: "TV Drama" },
    // { id: 14, catID: 'games', subcat: 'all' },


  ]