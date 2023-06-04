import { Heading, Icon, Text, HStack, VStack, Box, Flex, Spacer, Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaFile } from "react-icons/fa";

import { DisplayCard } from './components/ProjectCard.jsx';
import { projects, work } from './data.js';

const styles = {
    app: {
        height: "100vh",
        width: "100vw",
        overlay: "hidden",
        alignItems: "center",
        justifyContent: "center",
        gap: "150px"
    },
    section: {
        height: "80vh",
        width: "35vw",
        alignItems: 'flex-start',
    },
    iconSize: "2rem",
}

export default function App() {
    return (
        <Flex bgColor="brand.1" style={styles.app}>
            <VStack style={styles.section}>
                <Box>
                    <Heading fontSize='5xl' fontWeight="400">Aditya Ranganathan</Heading>
                    <Text fontSize='2xl' fontWeight="200">Software Engineer</Text>
                </Box>
                <Spacer />
                <HStack spacing="30px" >
                    <Link href="https://github.com/adityaranganathan" isExternal _hover={{ transform: "scale(1.2)" }} >
                        <Icon as={FaGithub} boxSize={styles.iconSize} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/adityaranganathan" isExternal _hover={{ transform: "scale(1.2)" }} >
                        <Icon as={FaLinkedin} boxSize={styles.iconSize} />
                    </Link>
                    <Link href="Resume2023.pdf" target="_blank" isExterna _hover={{ transform: "scale(1.2)" }} >
                        <Icon as={FaFile} boxSize={styles.iconSize} />
                    </Link>
                </HStack>
            </VStack>

            <VStack spacing="10px" style={styles.section}>
                <Text fontSize='xl'>WORK</Text>
                <DisplayCard content={work[0]}></DisplayCard>
                <DisplayCard content={work[1]}></DisplayCard>

                <Text pt="20px" fontSize='xl'>PROJECTS</Text>
                <DisplayCard content={projects[0]}></DisplayCard>
                <DisplayCard content={projects[1]}></DisplayCard>
            </VStack>
        </Flex>
    );
}