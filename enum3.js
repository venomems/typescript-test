var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership.Standard;
var membershipReverse = Membership[2];
console.log(membership);
console.log(membershipReverse);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "vkontakte";
    SocialMedia["FACEBOOK"] = "facebook";
    SocialMedia["INST"] = "instagram";
})(SocialMedia || (SocialMedia = {}));
var social = SocialMedia.INST;
console.log(social);
