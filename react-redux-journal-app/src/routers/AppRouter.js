import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route 
                        path="/auth"
                        element={ <AuthRouter /> }
                    />

                    <Route 
                        exact
                        path="/"
                        element={ <JournalScreen /> }
                    />

                    <Route path='*' to="/auth/login" />


                </Routes>
            </div>
        </Router>
    )
}
