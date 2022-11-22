import { useState } from "react";

// const [openCards, setOpenCards] = useState([]);
// const [clearedCards, setClearedCards] = useState({});
// const [moves, setMoves] = useState(0);
// const [showModal, setShowModal] = useState(false);
// const timeout = useRef(null);

// // Check if both the cards have same type. If they do, mark them inactive
// const evaluate = () => {
//   const [first, second] = openCards;
//   if (cards[first].type === cards[second].type) {
//     setClearedCards((prev) => ({ ...prev, [cards[first].type]: true }));
//     setOpenCards([]);
//     return;
//   }
//   // Flip cards after a 500ms duration
//   timeout.current = setTimeout(() => {
//     setOpenCards([]);
//   }, 500);
// };

// const handleCardClick = (index) => {
//   // Have a maximum of 2 items in array at once.
//   if (openCards.length === 1) {
//     setOpenCards((prev) => [...prev, index]);
//     // increase the moves once we opened a pair
//     setMoves((moves) => moves + 1);
//   } else {
//     // If two cards are already open, we cancel timeout set for flipping cards back
//     clearTimeout(timeout.current);
//     setOpenCards([index]);
//   }
// };
// useEffect(() => {
//     if (openCards.length === 2) {
//       setTimeout(evaluate, 500);
//     }
//   }, [openCards]);

 


// export const checkIsFlipped = (index) => {
//     return openCards.includes(index);
//   };

// export const checkIsInactive = (card) => {
//     return Boolean(clearedCards[card.type]);
//   };