function CanOrNot(dt, by, cy, c) {
   if (c === 1)
       return false;
       else if (c === 2)
           return (cy - by) >=16;
       else if (c === 3)
           return (cy - by) >= 21;
       else if (c === 4) {
            if (dt === 1)
                return (cy- by) >= 21;
       }
       else if (c === 5) {
            return (cy - by) >= 18;
      }
   

}

export { CanOrNot }; 