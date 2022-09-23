import React from 'react'
import CartWidget from './CartWidget'
import {Flex, HStack, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <Flex zIndex="1" position="fixed" px="80px" py="20px" width="full" bg="black" alignItems="flex-end" justifyContent="space-between">
                <Link to="/">
                <Text fontSize='sm' color="white">E-Commerce</Text>
                </Link>
            <Flex alignItems="flex-end">
                <HStack color="white" spacing="40px">
                    <Link to="/categoria/nike">
                    <Text fontSize='sm'>Nike</Text>
                    </Link>
                    <Link to="/categoria/adidas">
                    <Text fontSize='sm'>Adidas</Text>
                    </Link>
                    <Link to="/categoria/vans">
                    <Text fontSize='sm'>Vans</Text>
                    </Link>
                    <Link to="/categoria/balenciaga">
                    <Text fontSize='sm'>Balenciaga</Text>
                    </Link>
                </HStack>
            </Flex>
            <CartWidget />
        </Flex>
    )
}
