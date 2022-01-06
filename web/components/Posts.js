import React, { useState } from 'react'
import {
    Box,
    Heading,
    Link,
    List,
    ListItem,
    Text,
    Accordion,
    AccordionButton,
    AccordionPanel,
    AccordionItem,
} from '@chakra-ui/react';

function Content(props) {

    return <AccordionItem width="40%" height="200px" margin='100px' right="700" spacing="5">
        <AccordionButton boxShadow="0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)" p='6' rounded='md' borderRadius="10px" backgroundColor="white">
            <List>
                <ListItem key={props.id}>
                    <Link href={props.link} fontSize="24px" fontWeight="500">
                        {props.title}
                    </Link><br />
                    <Text fontSize='16px' fontWeight='400' textDecoration='underline'>{props.company}</Text>
                    <Text fontSize='16px'>{props.location}</Text><br />
                    <Text fontSize='12px'>{props.jobDescription}</Text><br />
                    <Text fontSize='12px'>{props.dateString}</Text><br />
                </ListItem>
            </List>
        </AccordionButton>
        <AccordionPanel position="absolute" left="1200" height="70%" top="275" boxShadow="0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)" p='6'
            rounded='md' borderRadius="10px">
            <Text>{props.jobDescription}</Text>
        </AccordionPanel>
    </AccordionItem>
}

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <Heading>Loading...</Heading>;
    }

    return (
        <Box>
            <Accordion>
                {posts.map(post => (
                    <Content id={post.id} link={post.link} title={post.title} location={post.location} jobDescription={post.jobDescription} dateString={post.dateString} />
                ))};
            </Accordion>
        </Box>
    );
};

export default Posts;