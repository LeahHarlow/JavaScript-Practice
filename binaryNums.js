//# Binary Numbers

//8 secs, 00000000 each one is assigned a doubling from 1 startign left and going right.

//  0   0  0  0   0  0  0  0
// 128  64 32 16  8  4  2  1

//  0   0  1  0   1  1  0  0  = 44

//binary numbers ccan be used to simplify objects too. For example If you have a hotel and you want to keep track of the perks guests have used you could make a massive oject(that possibly is more human readable) or use a binary mask. ie

// The bitwise AND operator (&) returns a 1 in each bit position for which the corresponding bits of both operands are 1s.

// The bitwise OR operator (|) returns a 1 in each bit position for which the corresponding bits of either or both operands are 1s.

// The left shift operator (<<) shifts the first operand the specified number of bits, modulo 32, to the left. Excess bits shifted off to the left are discarded. Zero bits are shifted in from the right.

// The right shift operator (>>) returns the signed number represented by the result of performing a sign-extending shift of the binary representation of the first operand (evaluated as a two's complement bit string) to the right by the number of bits, modulo 32, specified in the second operand. Excess bits shifted off to the right are discarded, and copies of the leftmost bit are shifted in from the left.

// const HAS_DONE_YOGA = 1 //OR 0b001 in js binary syntax
// const HAS_DONE_DINNER = 0b0010 //OR 2
// const HAS_DONE_KAYAK = 0b0100 // or 4
// const HAS_DONE_SAUNA = 0b1000 // or 8

const HAS_DONE_YOGA = 0b0001 << 0; //OR 0b0001 in js binary syntax
const HAS_DONE_DINNER =  0b0001 << 1; //OR 0b0010 OR 2
const HAS_DONE_KAYAK =  0b0001 << 2; // OR 0b0100 or 4
const HAS_DONE_SAUNA =  0b0001 << 3; // OR 0b1000 or 8

const guestJoe = {
  name: 'Joe',
  claimedPerks: 11, // 0b1011 or binary number 11 bc 1+2+8=11
};

const guestPenny = {
  name: 'Penny',
  claimedPerks: 4,
};

const guestLilly = {
  name: 'Lilly',
  claimedPerks: 12,
};

const guestZuma = {
  name: 'Zuma',
  claimedPerks: 10,
};

const family = [
  {
    name: 'Morticia',
    claimedPerks: 11,
  },
  {
    name: 'Gomez',
    claimedPerks: 4,
  },
  {
    name: 'Wednesday',
    claimedPerks: 1,
  },
  {
    name: 'Pugsley',
    claimedPerks: 12,
  },
  {
    name: 'Uncle Fester',
    claimedPerks: 11,
  },
  {
    name: 'Thing',
    claimedPerks: 12,
  },
  {
    name: 'Grandmama',
    claimedPerks: 15,
  },
  {
    name: 'Lurch',
    claimedPerks: 1,
  },
]
//If these members are all family members then we could make one massive binary that shows all of their perks put together. Array.Reduce is great here.

const totalFamilyClaimedPerks = family.reduce((totalPerksValue, familyMember)=> {
  const claimedPerks = familyMember.claimedPerks;
  const withSomeRoom = totalPerksValue << 4
  
})

//The & symbol here will compare the two binary codes and return the common values.
//1011 = Joe
//0001 = yoga
//0010 = dinner etc look where the ones line up.
const printClaimedPerks = (guest) => {
  const { claimedPerks, name } = guest;

  if ((claimedPerks & HAS_DONE_YOGA) !== 0) {
    console.log(`${name} has cliamed the yoga perk!`);
  }
  if ((claimedPerks & HAS_DONE_DINNER) !== 0) {
    console.log(`${name} has cliamed the dinner perk!`);
  }
  if ((claimedPerks & HAS_DONE_KAYAK) !== 0) {
    console.log(`${name} has cliamed the kayak perk!`);
  }
  if ((claimedPerks & HAS_DONE_SAUNA) !== 0) {
    console.log(`${name} has cliamed the sauna perk!`);
  }
};

printClaimedPerks(guestJoe);
printClaimedPerks(guestPenny);
printClaimedPerks(guestLilly);
printClaimedPerks(guestZuma);
