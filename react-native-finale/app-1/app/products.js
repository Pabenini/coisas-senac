import { Text, View, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";
import list from './products.json';

export default function Products() {

    // const ContentList = () => {
    // Dados de exemplo para os itens da lista

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>
                Linguagens de Programação
            </Text>
            {list.listProduct.map((item) => (
                <Link 
                key={item.id} 
                style={styles.itemContainer}
                href={{
                    pathname: "/Csingle/[id]",
                    params: { id: item.id }
                }}
                >
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <View style={styles.textContainer}>
                        <Text style={styles.titleProduct}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                    </View>
                </Link>                
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center', fontWeight: 'bold', marginBottom: 20, marginTop: 20,
        color: '#fff', fontSize: 20
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#3949AB',
    },
    itemContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        backgroundColor: '#7A91BF',
        borderRadius: 8,
        padding: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },
    titleProduct: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        marginTop: 5,
        fontSize: 14,
    },
});
