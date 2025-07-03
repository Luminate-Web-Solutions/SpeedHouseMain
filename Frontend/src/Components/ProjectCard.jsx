import React from 'react';

const ProjectCard = ({
  title,
  image,
  client,
  location,
  projectType,
  configuration,
  builtUpArea,
  onViewDetails,   // ✅ Receive function from parent
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 w-full sm:w-[345px] flex-shrink-0 flex flex-col h-[480px]">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover rounded-t-2xl shadow-md transition duration-300 hover:scale-105"
      />
      <div className="p-5 text-gray-800 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-xl font-bold text-blue-800 mb-3 text-center">{title}</h3>
          <ul className="space-y-2 text-sm">
            {client && <li><strong>Client:</strong> {client}</li>}
            {location && <li><strong>Location:</strong> {location}</li>}
            {projectType && <li><strong>Type:</strong> {projectType}</li>}
            {configuration && <li><strong>Config:</strong> {configuration}</li>}
            {builtUpArea && <li><strong>Area:</strong> {builtUpArea}</li>}
          </ul>
        </div>

        {/* ✅ View Details Button */}
        <button
          onClick={onViewDetails}
          className="mt-4 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
