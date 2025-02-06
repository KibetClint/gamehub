// // src/components/ProfileCard.jsx
// import 'react';
// import { Link } from 'react-router-dom';
// import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

// const ProfileCard = ({ profile }) => {
//   // Destructure profile properties. You can customize these fields.
//   const { name, location, email, avatar, bio, profileLink } = profile;

//   return (
//     <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
//       {/* Header with Avatar and Basic Info */}
//       <div className="flex items-center p-4">
//         <img
//           className="w-16 h-16 rounded-full object-cover"
//           src={avatar}
//           alt={`${name}'s avatar`}
//         />
//         <div className="ml-4">
//           <h3 className="text-xl font-bold">{name}</h3>
//           {location && (
//             <p className="text-gray-600 flex items-center">
//               <FaMapMarkerAlt className="mr-1" /> {location}
//             </p>
//           )}
//           {email && (
//             <p className="text-gray-600 flex items-center">
//               <FaEnvelope className="mr-1" /> {email}
//             </p>
//           )}
//         </div>
//       </div>
      
//       {/* Body with Bio */}
//       <div className="px-4 pb-4">
//         <p className="text-gray-700">{bio}</p>
//         <div className="mt-4">
//           <Link to={profileLink} className="text-blue-500 hover:underline">
//             View Profile
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileCard;
