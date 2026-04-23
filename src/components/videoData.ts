// Convert Google Drive IDs to direct MP4 URLs for faster loading
const driveToMp4 = (id: string) => `https://drive.google.com/uc?export=download&id=${id}`;

export const showcaseVideos = [
  {
    id: 1,
    title: "",
    videoUrl: driveToMp4("1ErtzC6w7zKbVPQUVAbcJZdCW-V35flMs")
  },
  {
    id: 2,
    title: "",
    videoUrl: driveToMp4("1MF_Kn31dsmeVXLTbP0Zev_KkdWQqouHI")
  }
];

export const videos = [
  {
    id: 1,
    url: driveToMp4("1HO9-OuV1ro2dR3XrYc_o0zqBa_-v_oeE"),
    title: ""
  },
  {
    id: 2,
    url: driveToMp4("11oYrl0rumOke2fyVN-FbgwmlBzKOJ7LK"),
    title: ""
  },
  {
    id: 3,
    url: driveToMp4("1_2OCDQP6Mo-0LGapp1jehLjJ20SX7-HL"),
    title: ""
  },
  {
    id: 4,
    url: driveToMp4("1I-TM9uLCf6Rz3WyptXiVmdxJassSAfCQ"),
    title: ""
  }
];