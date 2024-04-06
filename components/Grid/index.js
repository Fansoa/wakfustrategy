'use client';

import PropTypes from 'prop-types';
import Box from "./components/Box";

import { GridContainer, GridBox, SpellButtonsListContainer } from "./styled";

import { useState } from "react";

import SpellButtonsList from "./components/SpellButtonsList";

const isPlayer = ({pos, abs, ord}) => {
  if (pos.abs === abs && pos.ord === ord) {
    return true
  }
  return false
}

const getDistance = ({originPosition, targetPosition}) => {
  const absD = Math.abs(originPosition.abs - targetPosition.abs);
  const ordD = Math.abs(originPosition.ord - targetPosition.ord);
  const distance = absD + ordD;

  return distance;
}

const inReach = ({range, distance}) => {
  if (distance >= range.min && distance <= range.max) {
    return true
  }
  return false
}

const manageRangeType = ({originPosition, targetPosition, rangeType}) => {
  if (rangeType === 'inline') {
    if(originPosition.abs === targetPosition.abs || originPosition.ord === targetPosition.ord){
      return true
    }
    return false
  }
  if (rangeType === 'diagonal') {
    const absD = Math.abs(originPosition.abs - targetPosition.abs);
    const ordD = Math.abs(originPosition.ord - targetPosition.ord);
    if (absD === ordD) {
      return true
    }
    return false
  }
  if (rangeType === 'default') {
    return true
  }
  return false
}

const isTargetArea = ({playerPosition, originPosition, targetPosition, selectedSpell}) => {
  const distance = getDistance({originPosition, targetPosition})
  const areaType = selectedSpell.area.type
  const areaSize = selectedSpell.area.size

  if (areaType === 'default') {
    if (distance <= areaSize) {
      return true
    }
  }

  if (areaType === 'cross') {
    if (distance <= areaSize) {
      if(originPosition.abs === targetPosition.abs || originPosition.ord === targetPosition.ord){
        return true
      }
    }
  }

  if (areaType === 'inline') {
    const absdistancebetweenPlayerAndSellPos = Math.abs(playerPosition.abs-originPosition.abs);
    const orddistancebetweenPlayerAndSellPos = Math.abs(playerPosition.ord-originPosition.ord);
    


    if(playerPosition.abs < originPosition.abs){
      if (absdistancebetweenPlayerAndSellPos > orddistancebetweenPlayerAndSellPos) {
        if (playerPosition.ord === targetPosition.ord) {
          if (originPosition.abs <= targetPosition.abs) {
            if (distance <= areaSize) {
              return true
            }
          }
        }
      }
    }

    if(playerPosition.abs > originPosition.abs){
      if (absdistancebetweenPlayerAndSellPos > orddistancebetweenPlayerAndSellPos) {
        if (playerPosition.ord === targetPosition.ord) {
          if (originPosition.abs >= targetPosition.abs) {
            if (distance <= areaSize) {
              return true
            }
          }
        }
      }
    }

    if(playerPosition.ord < originPosition.ord){
      if (absdistancebetweenPlayerAndSellPos < orddistancebetweenPlayerAndSellPos) {
        if (playerPosition.abs === targetPosition.abs) {
          if (originPosition.ord <= targetPosition.ord) {
            if (distance <= areaSize) {
              return true
            }
          }
        }
      }
    }
    
    if(playerPosition.ord > originPosition.ord){
      if (absdistancebetweenPlayerAndSellPos < orddistancebetweenPlayerAndSellPos) {
        if (playerPosition.abs === targetPosition.abs) {
          if (originPosition.ord >= targetPosition.ord) {
            if (distance <= areaSize) {
              return true
            }
          }
        }
      }
    }
  }

  if (areaType === 'stick') {

    if(playerPosition.abs < originPosition.abs){
      if(originPosition.abs === targetPosition.abs ){
        if (distance <= areaSize) {
            return true
          }
      }
    }

    if(playerPosition.abs > originPosition.abs){
      if(originPosition.abs === targetPosition.abs ){
        if (distance <= areaSize) {
            return true
          }
      }
    }

    if(playerPosition.ord < originPosition.ord){
      if(originPosition.ord === targetPosition.ord ){
        if (distance <= areaSize) {
            return true
          }
      }
    }

    if(playerPosition.ord > originPosition.ord){
      if(originPosition.ord === targetPosition.ord ){
        if (distance <= areaSize) {
            return true
          }
      }
    }
  }

  return false
}

const isScope = ({pos, abs, ord, selectedSpell}) => {
  
  if(!selectedSpell){
    return false
  }

  const { po, rangeType } = selectedSpell

  const distance = getDistance({
    originPosition: {
      abs: pos.abs,
      ord: pos.ord
    },
    targetPosition: {
      abs,
      ord
    }
  })

  
  if(inReach({range: po, distance})){
    return manageRangeType({originPosition: {
      abs: pos.abs,
      ord: pos.ord
    },
    targetPosition: {
      abs,
      ord
    }, rangeType})
  }
}

const isTarget = ({abs, ord, hoveredBox}) => {
  if (abs === hoveredBox?.abs && ord === hoveredBox?.ord) {
    return true
  }
  return false
}

const Grid = ({boardSize, squaresSize, spells}) => {
  const [board, setBoard] = useState(Array.from({length: boardSize}).map(() => Array.from({length: boardSize})))
  const [pos, setPos] = useState({abs: 4, ord: 4})
  const [selectedSpell, setSelectedSpell] = useState(null)
  const [hoveredBox, setHoveredBox ] = useState(null)

  return (
    <>
        <GridContainer>
          <GridBox $boardSize={boardSize} $squaresSize={squaresSize}>
            {board.map((column, ord) => {
              return column.map((box, abs) => {
                
                
                if (isPlayer({pos, ord, abs})) {
                  return <Box key={`[${abs},${ord}]`} size={squaresSize} ord={ord} abs={abs} state='player'/>
                }
                if(selectedSpell && hoveredBox && isTargetArea({
                  playerPosition: {
                    abs: pos.abs,
                    ord: pos.ord
                  },
                  originPosition: hoveredBox,
                  targetPosition: {
                    abs,
                    ord
                  },
                  selectedSpell,
                })){
                  return <Box key={`[${abs},${ord}]`} size={squaresSize} ord={ord} abs={abs} state='target' setHoveredBox={isScope({pos, abs, ord, selectedSpell}) ? setHoveredBox : null}/>
                }
                if (isScope({pos, abs, ord, selectedSpell})) {
                  if (isTarget({abs, ord, hoveredBox})) {
                    return <Box key={`[${abs},${ord}]`} size={squaresSize} ord={ord} abs={abs} state='target'/>
                  }
                  return <Box key={`[${abs},${ord}]`} size={squaresSize} ord={ord} abs={abs} state='scope' setHoveredBox={setHoveredBox}/>
                }
                return <Box key={`[${abs},${ord}]`} size={squaresSize} ord={ord} abs={abs} state='default'/>
              })
            }
            )}
          </GridBox>
        </GridContainer>
        <SpellButtonsListContainer>
          <SpellButtonsList spells={spells} selectedSpell={selectedSpell} setSelectedSpell={setSelectedSpell}/>
        </SpellButtonsListContainer>
    </>
  )
}
Grid.propTypes = {
  boardSize: PropTypes.number,
  squaresSize: PropTypes.number, 
  spells: PropTypes.arrayOf(PropTypes.shape({}))
}

export default Grid;
