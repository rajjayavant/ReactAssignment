// import React from 'react';
// import Photo from './Photo';
// import { usePhotos } from '../../hooks/usePhotos';

// const PhotoGrid: React.FC = () => {
//   const { photos, loading, error } = usePhotos();

//   if (loading) return <div>Loading photos...</div>;
//   if (error) return <div>Error loading photos: {error}</div>;

//   return (
//     <div className="photo-grid">
//       {photos.map((photo, index) => (
//         <Photo key={index} url={photo.url} />
//       ))}
//     </div>
//   );
// };

// export default React.memo(PhotoGrid);