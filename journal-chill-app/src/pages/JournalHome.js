// journalHome.js
import React from "react";
import {Link} from "react-router-dom";
import NoteScreen from "../components/NoteScreen/NoteScreen";
import PersistentDrawerLeft, {Main} from "../components/SideBar";

function JournalHome() {
  return (
    <>
      <PersistentDrawerLeft>
        <NoteScreen />
        <Link to="/auth/login">Login</Link>
        <Link to="/auth/register">register</Link>
      </PersistentDrawerLeft>
    </>
  );
}

export default JournalHome;
