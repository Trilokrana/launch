// LaunchDetails.js
import React from 'react';

const LaunchDetails = ({ launch }) => {
    return (
        <div className="w-full bg-white p-4 rounded shadow-md">
            <h2 className="text-2xl font-bold mb-2">Mission Name: {launch.mission_name.toUpperCase()}</h2>
            <p className="text-xl mb-2">Launch Date: {launch.launch_date_utc}</p>
            <p>Details: {launch.details}</p>
            {launch.links.video_link && (
                <div className="video-container ">
                    <iframe
                        className='rounded-lg m-4'
                        width="560"
                        height="315"
                        src={launch.links.video_link.replace("watch?v=", "embed/")}
                        title={`Launch Video - ${launch.mission_name}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            )}

        </div>
    );
};

export default LaunchDetails;
