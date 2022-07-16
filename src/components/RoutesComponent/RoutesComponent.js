import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dialogs from '../Dialogs/Dialogs';
import Music from '../Music/Music';
import News from '../News/News';
import Profile from '../Profile/Profile';
import Settings from '../Settings/Settings';

const RoutesComponent = ({state}) => {
    return (
        <Routes>
            <Route path='/dialogs/*' element={<Dialogs dialogPage={state.messagesPage} />} />
            <Route path='/profile' element={<Profile profilePage={state.profilePage} />} />
            <Route path='/news/*' element={<News />} />
            <Route path='/music/*' element={<Music />} />
            <Route path='/settings/*' element={<Settings />} />
        </Routes>

    )
}

export default RoutesComponent;