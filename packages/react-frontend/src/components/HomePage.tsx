import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from "./Nav/Nav";
import { Flex, Text, Button, Box, Grid, ScrollArea, Heading } from '@radix-ui/themes';
 
const tempTasks = [
  {
      name: "Make Frontend",
      category: "CSC 307",
      completed: false
  },
  {
      name: "Make Backend",
      category: "CSC 307",
      completed: true
  }
];

function Home() {

  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <Nav />
      <h1>
        Home Page
      </h1>
      <Grid columns="2" gap="3" width="auto">
        <ScrollArea type="always" scrollbars="vertical" style={{ height: 300 }}>

        </ScrollArea>
      </Grid>
    </div>
  );
}
 
export default Home;