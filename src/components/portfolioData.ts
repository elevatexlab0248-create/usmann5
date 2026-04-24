export type Category = 'All' | 'Explainer Ads' | 'AI Ads';

export interface PortfolioVideo {
  id: number;
  title: string;
  category: Category;
  thumbnail: string;
  duration: string;
  client: string;
  videoUrl?: string;
}

// Convert YouTube Shorts URLs to embed format
const getYouTubeEmbedUrl = (url: string) => {
  const videoId = url.match(/shorts\/([^?]+)/)?.[1] || '';
  return `https://www.youtube.com/embed/${videoId}?autoplay=0`;
};

export const portfolioVideos: PortfolioVideo[] = [
  {
    id: 5,
    title: 'Explainer Video 1',
    category: 'Explainer Ads',
    thumbnail: 'https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '0:45',
    client: 'Client 1',
    videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/lc032R3bmFA?si=wE6cBFQP-I26A7q3'),
  },
  {
    id: 6,
    title: 'Explainer Video 2',
    category: 'Explainer Ads',
    thumbnail: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '0:50',
    client: 'Client 2',
    videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/10wOasCpl3o?si=ketIRoXJovrR61Ef'),
  },
  {
    id: 7,
    title: 'Explainer Video 3',
    category: 'Explainer Ads',
    thumbnail: 'https://images.pexels.com/photos/3588365/pexels-photo-3588365.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '0:55',
    client: 'Client 3',
    videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/khp1-AzMOCE?si=Lo0a8Vnube2WPLdy'),
  },
  {
    id: 8,
    title: 'Explainer Video 4',
    category: 'Explainer Ads',
    thumbnail: 'https://images.pexels.com/photos/3714901/pexels-photo-3714901.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '0:45',
    client: 'Client 4',
    videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/wfD5TFs5ITA?si=CE52GAKTyNfGMGpi'),
  },
  {
    id: 9,
    title: 'Explainer Video 5',
    category: 'Explainer Ads',
    thumbnail: 'https://images.pexels.com/photos/3747465/pexels-photo-3747465.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '0:50',
    client: 'Client 5',
    videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/_QfTmVNOw0M?si=GhsB59fY8jbPusvO'),
  },
  {
    id: 10,
    title: 'Explainer Video 6',
    category: 'Explainer Ads',
    thumbnail: 'https://images.pexels.com/photos/3938013/pexels-photo-3938013.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '0:48',
    client: 'Client 6',
    videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/7nwD33Z6CXw?si=4ynMIMYtiO_P-sMa'),
  },
  {
    id: 11,
    title: 'Explainer Video 7',
    category: 'Explainer Ads',
    thumbnail: 'https://images.pexels.com/photos/3975517/pexels-photo-3975517.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '0:52',
    client: 'Client 7',
    videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/PVVZXcf1IIU?si=8Oiy-ZcC7iRaEdUK'),
  },
  {
    id: 12,
    title: 'Explainer Video 8',
    category: 'Explainer Ads',
    thumbnail: 'https://images.pexels.com/photos/3848382/pexels-photo-3848382.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '0:46',
    client: 'Client 8',
    videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/M5PLDeWZXMo?si=WXp8HSnckkOCi0uf'),
  },
  {
    id: 13,
    title: 'Explainer Video 9',
    category: 'Explainer Ads',
    thumbnail: 'https://images.pexels.com/photos/3714896/pexels-photo-3714896.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '0:49',
    client: 'Client 9',
    videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/bPSzsKl5fto?si=JL9t_1uVxvheFwhv'),
  },
  {
    id: 14,
    title: 'Explainer Video 10',
    category: 'Explainer Ads',
    thumbnail: 'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '0:51',
    client: 'Client 10',
    videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/pDjwDIqOHC0?si=h6j5OCKgKAk7dNGS'),
  },
  {
    id: 15,
    title: 'Explainer Video 11',
    category: 'Explainer Ads',
    thumbnail: 'https://images.pexels.com/photos/3975518/pexels-photo-3975518.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '0:47',
    client: 'Client 11',
    videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/mgjm6wO2T_0?si=kkTVZOU7ONWKZEve'),
  },
  {
    id: 16,
    title: 'Explainer Video 12',
    category: 'Explainer Ads',
    thumbnail: 'https://images.pexels.com/photos/3587621/pexels-photo-3587621.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '0:53',
    client: 'Client 12',
    videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/SxWrtsrCQ-Y?si=_toRWGXYAz8pYRYt'),
  },
  {
    id: 17,
    title: 'Explainer Video 13',
    category: 'Explainer Ads',
    thumbnail: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '0:44',
    client: 'Client 13',
    videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/-5K0-RkvdXY?si=bCV1YuzmaaLomFJK'),
  },
  {
    id: 18,
    title: 'Explainer Video 14',
    category: 'Explainer Ads',
    thumbnail: 'https://images.pexels.com/photos/3588366/pexels-photo-3588366.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '0:50',
    client: 'Client 14',
    videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/wcxKzp7Cokg?si=7fQRmK6jFQ8etsZ3'),
  },
  {
    id: 19,
    title: 'Explainer Video 15',
    category: 'Explainer Ads',
    thumbnail: 'https://images.pexels.com/photos/3714902/pexels-photo-3714902.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '0:48',
    client: 'Client 15',
    videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/P9ckrTyDYL4?si=LBGs4qTiz49kaQp-'),
  },
  {
    id: 1,
    title: 'AI Ad 1',
    category: 'AI Ads',
    thumbnail: 'https://images.pexels.com/photos/3588365/pexels-photo-3588365.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '0:30',
    client: 'AI Ads',
    videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/ZD-VcyHBVog?si=vW8yYlo3zRRqHzS3'),
  },
  {
    id: 2,
    title: 'AI Ad 2',
    category: 'AI Ads',
    thumbnail: 'https://images.pexels.com/photos/3938013/pexels-photo-3938013.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '0:30',
    client: 'AI Ads',
    videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/imA0-uMW1uI?si=5l80A5a3s3EMtPDE'),
  },
  {
    id: 3,
    title: 'AI Ad 3',
    category: 'AI Ads',
    thumbnail: 'https://images.pexels.com/photos/3714896/pexels-photo-3714896.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '0:30',
    client: 'AI Ads',
    videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/0S992c2S7k8?si=6NfxL8j6qH_3PP6j'),
  },
  {
    id: 4,
    title: 'AI Ad 4',
    category: 'AI Ads',
    thumbnail: 'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '0:30',
    client: 'AI Ads',
    videoUrl: getYouTubeEmbedUrl('https://youtube.com/shorts/hTCdEPzl2xs?si=UoI5VQ5Q7HPJSi6M'),
  },
];

export const categories: Category[] = ['All', 'Explainer Ads', 'AI Ads'];
