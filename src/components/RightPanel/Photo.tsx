// import { useState, useEffect } from 'react';
// import { Photo } from '../types/types';
// import { fetchPhotos } from '../utils/api';

// export const usePhotos = () => {
//   const [photos, setPhotos] = useState<Photo[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const loadPhotos = async () => {
//       try {
//         const data = await fetchPhotos();
//         setPhotos(data);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to load photos');
//         setLoading(false);
//       }
//     };

//     loadPhotos();
//     const interval = setInterval(loadPhotos, 10000);

//     return () => clearInterval(interval);
//   }, []);

//   return { photos, loading, error };
// };