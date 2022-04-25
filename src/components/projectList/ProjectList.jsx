import React from 'react';
import Project from '../project/Project';
import './projectList.scss';
import { projectData } from '../../data';

const ProjectList = () => {
  return (
    <div className='project-list'>
      <div className='pl-texts'>
        <h1 className='pl-title'>Create & inspire. It's Lama</h1>
        <p className='pl-desc'>
          Lama is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more inside.
        </p>
      </div>
      <div className='pl-list'>
        {projectData.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default ProjectList;
