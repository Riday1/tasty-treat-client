import React from 'react';
import team_mate1 from '../../../assets/team/team_member_1.jpg'
import team_mate2 from '../../../assets/team/team_member_2.jpg'
import team_mate3 from '../../../assets/team/team_member_3.jpg'
import TeamMate from './TeamMate';


const TeamMates = () => {

    const teamMates = [
        { id: 1, img: team_mate1, name: 'Renu' },
        { id: 2, img: team_mate2, name: 'Amal Devis' },
        { id: 3, img: team_mate3, name: 'Adi' }
    ]

    return (
        <section className='my-20'>
            <div className='space-y-10 text-center mb-10'>
                <h3 className='text-xl text-red-500 font-bold'>Our Staf's</h3>
                <h1 className='text-5xl font-bold'>Meet Our Professionals</h1>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur minus <br /> vel neque dolores laudantium magnam quae numquam temporibus, exercitationem repellendus!</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20'>

                {
                    teamMates.map(teamMate => <TeamMate key={teamMate.id} teamMate={teamMate}></TeamMate>)
                }
            </div>
        </section>
    );
};

export default TeamMates;