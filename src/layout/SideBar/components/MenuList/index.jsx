import { Menu } from 'antd'
import {HouseSimple, ChartBarHorizontal, ChartLineUp, Money, Archive } from '@phosphor-icons/react' 
import React from 'react'
import * as S from './styles'

const MenuList = () => {
  const {Item,Divider} = Menu
  return (
    <S.StyledMenu theme='light' mode='inline'>
      <Item  key='Home' icon={<HouseSimple size={20} />}>
        <a href='/'>Dashboard</a>
      </Item>
      <Divider />
      <Item key='Vendas' icon={<ChartBarHorizontal size={20} />}>
        <a href='/vendas'>Vendas</a>
      </Item>
      <Divider />
      <Item key='DesempenhoPessoal' icon={<ChartLineUp size={20} />}>
        <a href='/desempenhoPessoal'>Desempenho Pessoal </a>
      </Item>
      <Divider />
      <Item key='Financeiro' icon={<Money size={20} />}>
        <a href='/financeiro'>Financeiro</a>
      </Item>
      <Divider />
      <Item key='Inventario&Estoque' icon={<Archive size={20} />}>
        <a href='/inventarioeestoque'>Inventario e Estoque</a>
      </Item>
      <Divider />
    </S.StyledMenu>
  )
}

export default MenuList