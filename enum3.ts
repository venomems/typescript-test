enum Membership {
    Simple,
    Standard,
    Premium
}

const membership = Membership.Standard;
const membershipReverse = Membership[2];
console.log(membership);
console.log(membershipReverse);

enum SocialMedia {
    VK = 'vkontakte',
    FACEBOOK = 'facebook',
    INST = 'instagram'
}

const social = SocialMedia.INST
console.log(social);