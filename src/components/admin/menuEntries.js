import React from 'react';
import PropTypes from 'prop-types';
import { AccordionPanel, Anchor} from 'grommet';
import SubMenu from "./subEntries";

export const entries = [   
  {entry:"Users", subItems: ["List Users","Add User"]}, 
  {entry:"Courses", subItems: ["List Study Courses","Add Study Course"]}, 
  {entry:"Academic Activities", subItems: ["Add Academic Activity","List  Academic Activities"]}, 
  {itentryem:"Academic Years", subItems: ["Add Academic Year","List Academic Years"]}, 
  {entry:"Degree Procedures", subItems: ["Doe","blue"]} 
] 

const MenuEntries = ({ active = 0, action }) => ( 
  entries.map((value, index) => ( 
    <AccordionPanel className={index === active ? 'active' : ''} heading = {value.item.toString()}> 
      <SubMenu /> 
      <Anchor className='sgaaf' onClick={() => action(0)}> 
            Non va 
      </Anchor> 
    </AccordionPanel> 
  )) 
); 

MenuEntries.propTypes = {
  active: PropTypes.number,
};

MenuEntries.defaultProps = {
  active: 0,
};

export default MenuEntries;
