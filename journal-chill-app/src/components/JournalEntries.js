import { List, ListItemButton } from '@mui/material';
import React from 'react'
import JournalEntry from './JournalEntry';

function JournalEntries() {

  const entries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  return (
    <div>
      <List>
        {entries.map(entry => (
          <ListItemButton components key={entry}>
            <JournalEntry />
          </ListItemButton>
        ))}
      </List>
  
    </div>
  )
}

export default JournalEntries