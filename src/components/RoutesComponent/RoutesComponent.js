import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dialogs from '../Dialogs/Dialogs';
import Music from '../Music/Music';
import News from '../News/News';
import Profile from '../Profile/Profile';
import Settings from '../Settings/Settings';

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path='/dialogs/*' element={<Dialogs />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/news/*' element={<News />} />
            <Route path='/music/*' element={<Music />} />
            <Route path='/settings/*' element={<Settings />} />
        </Routes>

    )
}

export default RoutesComponent;