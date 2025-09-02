import { Text } from 'react-native'

import { useImageContext } from '../ImageContext'

export default function Preview() {
    const { uri } = useImageContext()

    return (
        <Text>Hello uri is {uri}</Text>
    )
}