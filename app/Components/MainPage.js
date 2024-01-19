// Launches.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import LaunchDetails from './LaunchDetails';

const Launches = () => {
    const [launches, setLaunches] = useState([]);
    const [selectedLaunch, setSelectedLaunch] = useState(null);
    const [filter, setFilter] = useState('all'); // 'all', 'upcoming', 'past', 'dateRange'
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    useEffect(() => {
        const fetchLaunches = async () => {
            try {
                const response = await axios.get('https://api.spacexdata.com/v3/launches');
                setLaunches(response.data);
            } catch (error) {
                console.error('Error fetching launches:', error);
            }
        };

        fetchLaunches();
    }, []);

    const formatDate = (dateString) => {
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    const handleLearnMoreClick = (launch) => {
        setSelectedLaunch(launch);
    };

    const handleFilterChange = (value) => {
        setFilter(value);
    };

    const filterLaunches = () => {
        switch (filter) {
            case 'upcoming':
                return launches.filter((launch) => new Date(launch.launch_date_utc) > new Date());
            case 'past':
                return launches.filter((launch) => new Date(launch.launch_date_utc) < new Date());
            case 'dateRange':
                return launches.filter(
                    (launch) =>
                        new Date(launch.launch_date_utc) >= new Date(startDate) &&
                        new Date(launch.launch_date_utc) <= new Date(endDate)
                );
            default:
                return launches;
        }
    };

    return (
        <>
            <div className='relative'>
                <h1 className='w-full mt-60 text-white text-center text-6xl font-bold'>
                    LAUNCHES
                </h1>
            </div>
            <div className="mt-16 container mx-auto flex justify-end">
                <label className="mr-4">Filter By:</label>
                <select
                    value={filter}
                    onChange={(e) => handleFilterChange(e.target.value)}
                    className="p-2 border rounded"
                >
                    <option value="all">All Launches</option>
                    <option value="upcoming">Upcoming Launches</option>
                    <option value="past">Past Launches</option>
                    <option value="dateRange">Date Range</option>
                </select>
                {filter === 'dateRange' && (
                    <>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="p-2 ml-4 border rounded"
                        />
                        <span className="mx-2">to</span>
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="p-2 border rounded"
                        />
                    </>
                )}
            </div>
            <div className="mt-4 container mx-auto border-2 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filterLaunches().map((launch) => (
                        <div key={launch.flight_number} className="bg-white p-4 rounded shadow-md">
                            <div className="mb-4">
                                {launch.links.patch?.small && (
                                    <Image
                                        src={launch.links.patch?.small}
                                        alt={`Patch for ${launch.mission_name}`}
                                        width={100}
                                        height={100}
                                    />
                                )}
                            </div>
                            <p className="text-xl mb-2">{formatDate(launch.launch_date_utc)}</p>
                            <h2 className="text-2xl font-bold mb-2">{launch.mission_name.toUpperCase()}</h2>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                                onClick={() => handleLearnMoreClick(launch)}
                            >
                                LEARN MORE
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            {/* Display selected launch details */}
            {selectedLaunch && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg">
                        <LaunchDetails launch={selectedLaunch} />
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
                            onClick={() => setSelectedLaunch(null)}
                        >
                            Back to Launches
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Launches;
