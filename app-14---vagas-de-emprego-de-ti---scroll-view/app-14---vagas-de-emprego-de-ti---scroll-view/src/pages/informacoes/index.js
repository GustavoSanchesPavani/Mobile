import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from './style.js';
import { useRoute } from '@react-navigation/native';

function Informacoes() {
    const route = useRoute();
    const { title } = route.params;

    const getVagaInfo = (title) => {
        switch (title) {
            case 'Desenvolvedor Web':
                return {
                    salario: 'Salário: R$ 150.000',
                    descricao: 'Descrição: Necessário ter conhecimento em HTML5, CSS, PHP e JavaScript',
                    contato: 'Contato: 4002-8922'
                };
            case 'Analista de Dados':
                return {
                    salario: 'Salário: R$ 150.000',
                    descricao: 'Descrição: Front-end é a interface do usuário em um aplicativo web.',
                    contato: 'Contato: 4002-8922'
                };
            case 'Desenvolvedor de BackEnd':
                return {
                    salario: 'Salário: R$ 150.000',
                    descricao: 'Descrição: Backend é a parte do aplicativo que geralmente não é vista pelo usuário.',
                    contato: 'Contato: 4002-8922'
                };
            case 'Desenvolvedor Mobile':
                return {
                    salario: 'Salário: R$ 150.000',
                    descricao: 'Descrição: Desenvolvedor responsável por criar aplicativos para dispositivos móveis.',
                    contato: 'Contato: 4002-8922'
                };
            case 'Engenheiro de Software':
                return {
                    salario: 'Salário: R$ 150.000',
                    descricao: 'Descrição: Engenheiro especializado em desenvolvimento de software.',
                    contato: 'Contato: 4002-8922'
                };
            case 'Arquiteto de Soluções':
                return {
                    salario: 'Salário: R$ 150.000',
                    descricao: 'Descrição: Arquiteto responsável por projetar soluções de software.',
                    contato: 'Contato: 4002-8922'
                };
            case 'Desenvolvedor FrontEnd':
                return {
                    salario: 'Salário: R$ 150.000',
                    descricao: 'Descrição: Desenvolvedor focado na parte visual e interativa de um site ou aplicação.',
                    contato: 'Contato: 4002-8922'
                };
            case 'Desenvolvedor FullStack':
                return {
                    salario: 'Salário: R$ 150.000',
                    descricao: 'Descrição: Desenvolvedor que domina tanto o front-end quanto o back-end de uma aplicação.',
                    contato: 'Contato: 4002-8922'
                };
            case 'Analista de Qualidade de Software':
                return {
                    salario: 'Salário: R$ 150.000',
                    descricao: 'Descrição: Analista responsável por garantir a qualidade do software através de testes.',
                    contato: 'Contato: 4002-8922'
                };
            case 'Desenvolvedor de Jogos':
                return {
                    salario: 'Salário: R$ 150.000',
                    descricao: 'Descrição: Desenvolvedor especializado na criação de jogos digitais.',
                    contato: 'Contato: 4002-8922'
                };
            case 'Analista de Sistemas':
                return {
                    salario: 'Salário: R$ 150.000',
                    descricao: 'Descrição: Analista responsável por analisar e projetar sistemas de informação.',
                    contato: 'Contato: 4002-8922'
                };
            case 'Desenvolvedor de IA':
                return {
                    salario: 'Salário: R$ 150.000',
                    descricao: 'Descrição: Desenvolvedor especializado em Inteligência Artificial.',
                    contato: 'Contato: 4002-8922'
                };
            case 'Designer UX/UI':
                return {
                    salario: 'Salário: R$ 150.000',
                    descricao: 'Descrição: Designer especializado em experiência do usuário e interface do usuário.',
                    contato: 'Contato: 4002-8922'
                };
            default:
                return {
                    salario: 'Salário não especificado',
                    descricao: 'Descrição não disponível',
                    contato: 'Contato não disponível'
                };
        }
    };

    const vagaInfo = getVagaInfo(title);

    return (
        <View style={styles.containerPrincipal}>
            <Text style={styles.titulo}>INFORMAÇÕES</Text>
            <Text style={styles.tituloVaga}>{title}</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.cartaoVaga}>
                    <Text style={styles.salario}>{vagaInfo.salario}</Text>
                    <Text style={styles.descricao}>{vagaInfo.descricao}</Text>
                    <Text style={styles.contato}>{vagaInfo.contato}</Text>
                </View>
            </ScrollView>
        </View>
    );
}

export default Informacoes;
