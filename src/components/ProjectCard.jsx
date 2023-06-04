import { Card, CardHeader, CardBody, HStack, Text, Tag, Flex, Spacer, Link } from '@chakra-ui/react'

export function DisplayCard({ content: { url, title, year, description, tags } }) {
    return (
        <Link href={url} isExternal w="100%" _hover={{ textDecoration: 'none' }}>
            <Card bgColor="none" _hover={{ bgColor: "brand.0", transform: "scale(1.01)" }} transition="all 0.2s ease">
                <CardHeader pt="15px" pb="0px">
                    <Flex>
                        <Text fontSize='lg' fontWeight="500" >{title}</Text>
                        <Spacer />
                        <Text fontSize='md' fontWeight="300" >{year}</Text>
                    </Flex>
                </CardHeader>
                <CardBody pt="5px" pb="15px">
                    <Text fontSize='sm' fontWeight="300">{description}</Text>
                    <HStack pt="10px" spacing='10px' flexWrap="wrap">
                        {tags.map(tag => (
                            <Tag bgColor="brand.2" p="5px 10px" size='md' borderRadius='full'>{tag}</Tag>
                        ))}
                    </HStack>
                </CardBody>
            </Card>
        </Link>
    );
}
