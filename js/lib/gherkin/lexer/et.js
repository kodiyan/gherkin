
/* line 1 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/et.js.rl" */
;(function() {


/* line 117 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/et.js.rl" */



/* line 11 "js/lib/gherkin/lexer/et.js" */
const _lexer_actions = [
	0, 1, 0, 1, 1, 1, 2, 1, 
	3, 1, 4, 1, 5, 1, 6, 1, 
	7, 1, 8, 1, 9, 1, 10, 1, 
	11, 1, 14, 1, 15, 1, 16, 1, 
	17, 1, 18, 1, 19, 1, 20, 1, 
	21, 2, 2, 16, 2, 11, 0, 2, 
	12, 13, 2, 15, 0, 2, 15, 1, 
	2, 15, 14, 2, 15, 17, 2, 16, 
	4, 2, 16, 5, 2, 16, 6, 2, 
	16, 7, 2, 16, 8, 2, 16, 14, 
	2, 18, 19, 2, 20, 0, 2, 20, 
	1, 2, 20, 14, 2, 20, 17, 3, 
	3, 12, 13, 3, 9, 12, 13, 3, 
	10, 12, 13, 3, 11, 12, 13, 3, 
	12, 13, 16, 3, 15, 12, 13, 4, 
	2, 12, 13, 16, 4, 15, 0, 12, 
	13
];

const _lexer_key_offsets = [
	0, 0, 18, 35, 36, 37, 41, 46, 
	51, 56, 61, 65, 69, 71, 72, 73, 
	74, 75, 76, 77, 78, 79, 80, 81, 
	82, 83, 84, 85, 86, 87, 88, 90, 
	95, 102, 107, 108, 109, 110, 111, 112, 
	113, 114, 116, 117, 118, 119, 120, 121, 
	122, 123, 124, 125, 132, 134, 136, 138, 
	140, 142, 144, 161, 162, 163, 165, 166, 
	167, 168, 169, 170, 171, 172, 173, 185, 
	187, 189, 191, 193, 195, 197, 199, 201, 
	203, 205, 207, 209, 211, 213, 215, 217, 
	219, 221, 223, 225, 227, 229, 231, 233, 
	235, 237, 239, 241, 243, 245, 247, 249, 
	251, 253, 255, 257, 259, 261, 263, 265, 
	267, 269, 271, 273, 275, 276, 277, 278, 
	279, 280, 281, 282, 283, 284, 285, 286, 
	287, 288, 289, 290, 291, 292, 305, 307, 
	309, 311, 313, 315, 317, 319, 321, 323, 
	325, 327, 329, 331, 333, 335, 337, 339, 
	341, 343, 345, 347, 349, 351, 353, 355, 
	358, 360, 362, 364, 366, 368, 370, 373, 
	375, 377, 379, 381, 383, 385, 387, 389, 
	391, 393, 395, 396, 397, 398, 399, 400, 
	401, 402, 403, 404, 405, 406, 407, 408, 
	423, 425, 427, 429, 431, 433, 435, 437, 
	439, 441, 443, 445, 447, 449, 451, 453, 
	455, 457, 459, 461, 463, 465, 467, 469, 
	471, 473, 476, 478, 480, 482, 484, 486, 
	488, 490, 492, 494, 496, 498, 500, 502, 
	504, 506, 508, 510, 512, 514, 516, 519, 
	521, 523, 525, 527, 529, 530, 531, 532, 
	533, 534, 535, 536, 550, 552, 554, 556, 
	558, 560, 562, 564, 566, 568, 570, 572, 
	574, 576, 578, 580, 582, 584, 586, 588, 
	590, 592, 594, 596, 598, 600, 603, 605, 
	607, 609, 611, 613, 615, 617, 619, 621, 
	623, 625, 627, 629, 631, 633, 635, 637, 
	639, 641, 643, 646, 648, 652, 658, 661, 
	663, 669, 686, 687, 688
];

const _lexer_trans_keys = [
	10, 32, 34, 35, 37, 42, 64, 69, 
	74, 75, 79, 82, 83, 84, 124, 239, 
	9, 13, 10, 32, 34, 35, 37, 42, 
	64, 69, 74, 75, 79, 82, 83, 84, 
	124, 9, 13, 34, 34, 10, 32, 9, 
	13, 10, 32, 34, 9, 13, 10, 32, 
	34, 9, 13, 10, 32, 34, 9, 13, 
	10, 32, 34, 9, 13, 10, 32, 9, 
	13, 10, 32, 9, 13, 10, 13, 10, 
	95, 70, 69, 65, 84, 85, 82, 69, 
	95, 69, 78, 68, 95, 37, 32, 10, 
	10, 13, 13, 32, 64, 9, 10, 9, 
	10, 13, 32, 64, 11, 12, 10, 32, 
	64, 9, 13, 101, 108, 100, 97, 100, 
	101, 115, 97, 117, 104, 116, 117, 109, 
	105, 100, 58, 10, 10, 10, 32, 35, 
	79, 124, 9, 13, 10, 109, 10, 97, 
	10, 100, 10, 117, 10, 115, 10, 58, 
	10, 32, 34, 35, 37, 42, 64, 69, 
	74, 75, 79, 82, 83, 84, 124, 9, 
	13, 117, 105, 32, 100, 109, 97, 100, 
	117, 115, 58, 10, 10, 10, 32, 35, 
	37, 64, 74, 79, 82, 83, 84, 9, 
	13, 10, 95, 10, 70, 10, 69, 10, 
	65, 10, 84, 10, 85, 10, 82, 10, 
	69, 10, 95, 10, 69, 10, 78, 10, 
	68, 10, 95, 10, 37, 10, 117, 10, 
	104, 10, 116, 10, 117, 10, 109, 10, 
	105, 10, 100, 10, 58, 10, 109, 10, 
	97, 10, 100, 10, 117, 10, 115, 10, 
	97, 10, 97, 10, 109, 10, 115, 10, 
	116, 10, 115, 10, 101, 10, 110, 10, 
	97, 10, 97, 10, 114, 10, 105, 10, 
	117, 10, 109, 10, 97, 10, 117, 10, 
	115, 10, 116, 97, 97, 109, 115, 116, 
	115, 101, 110, 97, 97, 114, 105, 117, 
	109, 58, 10, 10, 10, 32, 35, 37, 
	42, 64, 69, 74, 75, 79, 83, 9, 
	13, 10, 95, 10, 70, 10, 69, 10, 
	65, 10, 84, 10, 85, 10, 82, 10, 
	69, 10, 95, 10, 69, 10, 78, 10, 
	68, 10, 95, 10, 37, 10, 32, 10, 
	101, 10, 108, 10, 100, 10, 97, 10, 
	100, 10, 101, 10, 115, 10, 97, 10, 
	117, 10, 105, 10, 32, 100, 10, 109, 
	10, 97, 10, 100, 10, 117, 10, 115, 
	10, 58, 10, 105, 116, 10, 105, 10, 
	115, 10, 101, 10, 110, 10, 97, 10, 
	97, 10, 114, 10, 105, 10, 117, 10, 
	109, 105, 116, 105, 115, 101, 110, 97, 
	97, 114, 105, 117, 109, 58, 10, 10, 
	10, 32, 35, 37, 42, 64, 69, 74, 
	75, 79, 82, 83, 84, 9, 13, 10, 
	95, 10, 70, 10, 69, 10, 65, 10, 
	84, 10, 85, 10, 82, 10, 69, 10, 
	95, 10, 69, 10, 78, 10, 68, 10, 
	95, 10, 37, 10, 32, 10, 101, 10, 
	108, 10, 100, 10, 97, 10, 100, 10, 
	101, 10, 115, 10, 97, 10, 117, 10, 
	105, 10, 32, 100, 10, 109, 10, 97, 
	10, 100, 10, 117, 10, 115, 10, 58, 
	10, 97, 10, 97, 10, 109, 10, 115, 
	10, 116, 10, 115, 10, 101, 10, 110, 
	10, 97, 10, 97, 10, 114, 10, 105, 
	10, 117, 10, 109, 10, 105, 116, 10, 
	105, 10, 97, 10, 117, 10, 115, 10, 
	116, 97, 117, 115, 116, 58, 10, 10, 
	10, 32, 35, 37, 42, 64, 69, 74, 
	75, 79, 82, 83, 9, 13, 10, 95, 
	10, 70, 10, 69, 10, 65, 10, 84, 
	10, 85, 10, 82, 10, 69, 10, 95, 
	10, 69, 10, 78, 10, 68, 10, 95, 
	10, 37, 10, 32, 10, 101, 10, 108, 
	10, 100, 10, 97, 10, 100, 10, 101, 
	10, 115, 10, 97, 10, 117, 10, 105, 
	10, 32, 100, 10, 109, 10, 97, 10, 
	100, 10, 117, 10, 115, 10, 58, 10, 
	97, 10, 97, 10, 109, 10, 115, 10, 
	116, 10, 115, 10, 101, 10, 110, 10, 
	97, 10, 97, 10, 114, 10, 105, 10, 
	117, 10, 109, 10, 105, 116, 10, 105, 
	32, 124, 9, 13, 10, 32, 92, 124, 
	9, 13, 10, 92, 124, 10, 92, 10, 
	32, 92, 124, 9, 13, 10, 32, 34, 
	35, 37, 42, 64, 69, 74, 75, 79, 
	82, 83, 84, 124, 9, 13, 187, 191, 
	0
];

const _lexer_single_lengths = [
	0, 16, 15, 1, 1, 2, 3, 3, 
	3, 3, 2, 2, 2, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 2, 3, 
	5, 3, 1, 1, 1, 1, 1, 1, 
	1, 2, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 5, 2, 2, 2, 2, 
	2, 2, 15, 1, 1, 2, 1, 1, 
	1, 1, 1, 1, 1, 1, 10, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 11, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 3, 
	2, 2, 2, 2, 2, 2, 3, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 1, 1, 1, 1, 1, 1, 
	1, 1, 1, 1, 1, 1, 1, 13, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 3, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 3, 2, 
	2, 2, 2, 2, 1, 1, 1, 1, 
	1, 1, 1, 12, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 3, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 2, 2, 2, 2, 2, 2, 
	2, 2, 3, 2, 2, 4, 3, 2, 
	4, 15, 1, 1, 0
];

const _lexer_range_lengths = [
	0, 1, 1, 0, 0, 1, 1, 1, 
	1, 1, 1, 1, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 1, 
	1, 1, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 1, 0, 0, 0, 0, 
	0, 0, 1, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 1, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 1, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 1, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 1, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 1, 1, 0, 0, 
	1, 1, 0, 0, 0
];

const _lexer_index_offsets = [
	0, 0, 18, 35, 37, 39, 43, 48, 
	53, 58, 63, 67, 71, 74, 76, 78, 
	80, 82, 84, 86, 88, 90, 92, 94, 
	96, 98, 100, 102, 104, 106, 108, 111, 
	116, 123, 128, 130, 132, 134, 136, 138, 
	140, 142, 145, 147, 149, 151, 153, 155, 
	157, 159, 161, 163, 170, 173, 176, 179, 
	182, 185, 188, 205, 207, 209, 212, 214, 
	216, 218, 220, 222, 224, 226, 228, 240, 
	243, 246, 249, 252, 255, 258, 261, 264, 
	267, 270, 273, 276, 279, 282, 285, 288, 
	291, 294, 297, 300, 303, 306, 309, 312, 
	315, 318, 321, 324, 327, 330, 333, 336, 
	339, 342, 345, 348, 351, 354, 357, 360, 
	363, 366, 369, 372, 375, 377, 379, 381, 
	383, 385, 387, 389, 391, 393, 395, 397, 
	399, 401, 403, 405, 407, 409, 422, 425, 
	428, 431, 434, 437, 440, 443, 446, 449, 
	452, 455, 458, 461, 464, 467, 470, 473, 
	476, 479, 482, 485, 488, 491, 494, 497, 
	501, 504, 507, 510, 513, 516, 519, 523, 
	526, 529, 532, 535, 538, 541, 544, 547, 
	550, 553, 556, 558, 560, 562, 564, 566, 
	568, 570, 572, 574, 576, 578, 580, 582, 
	597, 600, 603, 606, 609, 612, 615, 618, 
	621, 624, 627, 630, 633, 636, 639, 642, 
	645, 648, 651, 654, 657, 660, 663, 666, 
	669, 672, 676, 679, 682, 685, 688, 691, 
	694, 697, 700, 703, 706, 709, 712, 715, 
	718, 721, 724, 727, 730, 733, 736, 740, 
	743, 746, 749, 752, 755, 757, 759, 761, 
	763, 765, 767, 769, 783, 786, 789, 792, 
	795, 798, 801, 804, 807, 810, 813, 816, 
	819, 822, 825, 828, 831, 834, 837, 840, 
	843, 846, 849, 852, 855, 858, 862, 865, 
	868, 871, 874, 877, 880, 883, 886, 889, 
	892, 895, 898, 901, 904, 907, 910, 913, 
	916, 919, 922, 926, 929, 933, 939, 943, 
	946, 952, 969, 971, 973
];

const _lexer_indicies = [
	2, 1, 3, 4, 5, 6, 7, 8, 
	9, 10, 11, 12, 13, 14, 15, 16, 
	1, 0, 2, 1, 3, 4, 5, 6, 
	7, 8, 9, 10, 11, 12, 13, 14, 
	15, 1, 0, 17, 0, 18, 0, 19, 
	18, 18, 0, 22, 21, 23, 21, 20, 
	26, 25, 27, 25, 24, 26, 25, 28, 
	25, 24, 26, 25, 29, 25, 24, 31, 
	30, 30, 0, 2, 32, 32, 0, 34, 
	35, 33, 2, 0, 36, 0, 37, 0, 
	38, 0, 39, 0, 40, 0, 41, 0, 
	42, 0, 43, 0, 44, 0, 45, 0, 
	46, 0, 47, 0, 48, 0, 49, 0, 
	50, 0, 0, 51, 53, 54, 52, 0, 
	0, 0, 0, 55, 56, 57, 56, 56, 
	59, 58, 55, 2, 60, 7, 60, 0, 
	61, 0, 62, 0, 63, 0, 64, 0, 
	65, 0, 66, 0, 67, 0, 67, 68, 
	0, 69, 0, 70, 0, 71, 0, 72, 
	0, 73, 0, 74, 0, 75, 0, 77, 
	76, 79, 78, 79, 80, 81, 82, 81, 
	80, 78, 79, 83, 78, 79, 84, 78, 
	79, 85, 78, 79, 86, 78, 79, 87, 
	78, 79, 88, 78, 90, 89, 91, 92, 
	93, 94, 95, 96, 97, 98, 99, 100, 
	101, 102, 103, 89, 0, 104, 0, 105, 
	0, 50, 67, 0, 106, 0, 107, 0, 
	108, 0, 109, 0, 110, 0, 111, 0, 
	113, 112, 115, 114, 115, 116, 117, 118, 
	117, 119, 120, 121, 122, 123, 116, 114, 
	115, 124, 114, 115, 125, 114, 115, 126, 
	114, 115, 127, 114, 115, 128, 114, 115, 
	129, 114, 115, 130, 114, 115, 131, 114, 
	115, 132, 114, 115, 133, 114, 115, 134, 
	114, 115, 135, 114, 115, 136, 114, 115, 
	137, 114, 115, 138, 114, 115, 139, 114, 
	115, 140, 114, 115, 141, 114, 115, 142, 
	114, 115, 143, 114, 115, 144, 114, 115, 
	145, 114, 115, 146, 114, 115, 147, 114, 
	115, 148, 114, 115, 149, 114, 115, 144, 
	114, 115, 150, 114, 115, 151, 114, 115, 
	152, 114, 115, 153, 114, 115, 154, 114, 
	115, 155, 114, 115, 156, 114, 115, 157, 
	114, 115, 158, 114, 115, 159, 114, 115, 
	160, 114, 115, 161, 114, 115, 162, 114, 
	115, 144, 114, 115, 163, 114, 115, 164, 
	114, 115, 165, 114, 115, 144, 114, 166, 
	0, 167, 0, 168, 0, 169, 0, 170, 
	0, 171, 0, 172, 0, 173, 0, 174, 
	0, 175, 0, 176, 0, 177, 0, 178, 
	0, 179, 0, 180, 0, 182, 181, 184, 
	183, 184, 185, 186, 187, 188, 186, 189, 
	190, 191, 192, 193, 185, 183, 184, 194, 
	183, 184, 195, 183, 184, 196, 183, 184, 
	197, 183, 184, 198, 183, 184, 199, 183, 
	184, 200, 183, 184, 201, 183, 184, 202, 
	183, 184, 203, 183, 184, 204, 183, 184, 
	205, 183, 184, 206, 183, 184, 207, 183, 
	184, 208, 183, 184, 209, 183, 184, 210, 
	183, 184, 211, 183, 184, 212, 183, 184, 
	213, 183, 184, 214, 183, 184, 215, 183, 
	184, 215, 183, 184, 216, 183, 184, 217, 
	183, 184, 208, 215, 183, 184, 218, 183, 
	184, 219, 183, 184, 220, 183, 184, 221, 
	183, 184, 222, 183, 184, 208, 183, 184, 
	223, 224, 183, 184, 214, 183, 184, 225, 
	183, 184, 226, 183, 184, 227, 183, 184, 
	228, 183, 184, 229, 183, 184, 230, 183, 
	184, 231, 183, 184, 232, 183, 184, 222, 
	183, 233, 234, 0, 66, 0, 235, 0, 
	236, 0, 237, 0, 238, 0, 239, 0, 
	240, 0, 241, 0, 242, 0, 243, 0, 
	244, 0, 246, 245, 248, 247, 248, 249, 
	250, 251, 252, 250, 253, 254, 255, 256, 
	257, 258, 259, 249, 247, 248, 260, 247, 
	248, 261, 247, 248, 262, 247, 248, 263, 
	247, 248, 264, 247, 248, 265, 247, 248, 
	266, 247, 248, 267, 247, 248, 268, 247, 
	248, 269, 247, 248, 270, 247, 248, 271, 
	247, 248, 272, 247, 248, 273, 247, 248, 
	274, 247, 248, 275, 247, 248, 276, 247, 
	248, 277, 247, 248, 278, 247, 248, 279, 
	247, 248, 280, 247, 248, 281, 247, 248, 
	281, 247, 248, 282, 247, 248, 283, 247, 
	248, 274, 281, 247, 248, 284, 247, 248, 
	285, 247, 248, 286, 247, 248, 287, 247, 
	248, 288, 247, 248, 274, 247, 248, 289, 
	247, 248, 290, 247, 248, 291, 247, 248, 
	292, 247, 248, 293, 247, 248, 294, 247, 
	248, 295, 247, 248, 296, 247, 248, 297, 
	247, 248, 298, 247, 248, 299, 247, 248, 
	300, 247, 248, 301, 247, 248, 288, 247, 
	248, 302, 293, 247, 248, 280, 247, 248, 
	303, 247, 248, 304, 247, 248, 305, 247, 
	248, 288, 247, 306, 0, 307, 0, 308, 
	0, 309, 0, 310, 0, 312, 311, 314, 
	313, 314, 315, 316, 317, 318, 316, 319, 
	320, 321, 322, 323, 324, 315, 313, 314, 
	325, 313, 314, 326, 313, 314, 327, 313, 
	314, 328, 313, 314, 329, 313, 314, 330, 
	313, 314, 331, 313, 314, 332, 313, 314, 
	333, 313, 314, 334, 313, 314, 335, 313, 
	314, 336, 313, 314, 337, 313, 314, 338, 
	313, 314, 339, 313, 314, 340, 313, 314, 
	341, 313, 314, 342, 313, 314, 343, 313, 
	314, 344, 313, 314, 345, 313, 314, 346, 
	313, 314, 346, 313, 314, 347, 313, 314, 
	348, 313, 314, 339, 346, 313, 314, 349, 
	313, 314, 350, 313, 314, 351, 313, 314, 
	352, 313, 314, 353, 313, 314, 339, 313, 
	314, 354, 313, 314, 355, 313, 314, 356, 
	313, 314, 357, 313, 314, 358, 313, 314, 
	359, 313, 314, 360, 313, 314, 361, 313, 
	314, 362, 313, 314, 363, 313, 314, 364, 
	313, 314, 365, 313, 314, 366, 313, 314, 
	353, 313, 314, 367, 358, 313, 314, 345, 
	313, 368, 369, 368, 0, 372, 371, 373, 
	374, 371, 370, 0, 376, 377, 375, 0, 
	376, 375, 372, 378, 376, 377, 378, 375, 
	372, 379, 380, 381, 382, 383, 384, 385, 
	386, 387, 388, 389, 390, 391, 392, 379, 
	0, 393, 0, 1, 0, 394, 0
];

const _lexer_trans_targs = [
	0, 2, 2, 3, 12, 14, 28, 31, 
	34, 41, 59, 62, 116, 177, 244, 300, 
	306, 4, 5, 6, 7, 7, 7, 8, 
	7, 7, 7, 8, 9, 10, 11, 2, 
	11, 12, 2, 13, 15, 16, 17, 18, 
	19, 20, 21, 22, 23, 24, 25, 26, 
	27, 308, 29, 30, 30, 2, 13, 32, 
	33, 2, 32, 31, 33, 35, 36, 37, 
	38, 39, 40, 28, 42, 43, 44, 45, 
	46, 47, 48, 49, 50, 51, 50, 51, 
	51, 2, 52, 53, 54, 55, 56, 57, 
	58, 2, 2, 3, 12, 14, 28, 31, 
	34, 41, 59, 62, 116, 177, 244, 300, 
	60, 61, 63, 64, 65, 66, 67, 68, 
	69, 70, 69, 70, 70, 2, 71, 85, 
	93, 98, 102, 112, 72, 73, 74, 75, 
	76, 77, 78, 79, 80, 81, 82, 83, 
	84, 2, 86, 87, 88, 89, 90, 91, 
	92, 58, 94, 95, 96, 97, 99, 100, 
	101, 102, 103, 104, 105, 106, 107, 108, 
	109, 110, 111, 113, 114, 115, 117, 118, 
	119, 120, 121, 122, 123, 124, 125, 126, 
	127, 128, 129, 130, 131, 132, 133, 132, 
	133, 133, 2, 134, 148, 149, 156, 157, 
	160, 166, 135, 136, 137, 138, 139, 140, 
	141, 142, 143, 144, 145, 146, 147, 2, 
	58, 150, 151, 152, 153, 154, 155, 148, 
	158, 159, 161, 162, 163, 164, 165, 167, 
	168, 169, 170, 171, 172, 173, 174, 175, 
	176, 178, 179, 180, 181, 182, 183, 184, 
	185, 186, 187, 188, 189, 190, 191, 190, 
	191, 191, 2, 192, 206, 207, 214, 215, 
	218, 224, 238, 240, 193, 194, 195, 196, 
	197, 198, 199, 200, 201, 202, 203, 204, 
	205, 2, 58, 208, 209, 210, 211, 212, 
	213, 206, 216, 217, 219, 220, 221, 222, 
	223, 225, 226, 227, 228, 229, 230, 231, 
	232, 233, 234, 235, 236, 237, 239, 241, 
	242, 243, 245, 246, 247, 248, 249, 250, 
	251, 250, 251, 251, 2, 252, 266, 267, 
	274, 275, 278, 284, 298, 253, 254, 255, 
	256, 257, 258, 259, 260, 261, 262, 263, 
	264, 265, 2, 58, 268, 269, 270, 271, 
	272, 273, 266, 276, 277, 279, 280, 281, 
	282, 283, 285, 286, 287, 288, 289, 290, 
	291, 292, 293, 294, 295, 296, 297, 299, 
	300, 301, 302, 304, 305, 303, 301, 302, 
	303, 301, 304, 305, 3, 12, 14, 28, 
	31, 34, 41, 59, 62, 116, 177, 244, 
	300, 307, 0
];

const _lexer_trans_actions = [
	39, 0, 47, 3, 1, 0, 25, 1, 
	25, 25, 25, 25, 25, 25, 25, 31, 
	0, 0, 0, 47, 5, 41, 119, 41, 
	0, 29, 111, 29, 29, 0, 7, 95, 
	0, 0, 103, 21, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 50, 0, 99, 19, 0, 
	23, 107, 23, 44, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 50, 124, 0, 47, 
	0, 74, 77, 0, 0, 0, 0, 0, 
	17, 27, 115, 53, 50, 27, 56, 50, 
	56, 56, 56, 56, 56, 56, 56, 59, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	50, 124, 0, 47, 0, 62, 29, 77, 
	77, 77, 77, 77, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 9, 0, 0, 0, 0, 0, 0, 
	0, 9, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 50, 124, 0, 
	47, 0, 71, 29, 77, 77, 77, 77, 
	77, 77, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 15, 
	15, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 50, 124, 0, 
	47, 0, 68, 29, 77, 77, 77, 77, 
	77, 77, 77, 77, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 13, 13, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 50, 
	124, 0, 47, 0, 65, 29, 77, 77, 
	77, 77, 77, 77, 77, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 11, 11, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 0, 0, 0, 0, 0, 0, 
	0, 0, 33, 33, 47, 33, 80, 0, 
	0, 35, 0, 0, 86, 83, 37, 89, 
	83, 89, 89, 89, 89, 89, 89, 89, 
	92, 0, 0
];

const _lexer_eof_actions = [
	0, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39, 39, 39, 39, 
	39, 39, 39, 39, 39
];

const lexer_start = 1;
const lexer_first_final = 308;
const lexer_error = 0;

const lexer_en_main = 1;


/* line 120 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/et.js.rl" */

/* line 121 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/et.js.rl" */

/* line 122 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/et.js.rl" */

var Lexer = function(listener) {
  // Check that listener has the required functions
  var events = ['comment', 'tag', 'feature', 'background', 'scenario', 'scenario_outline', 'examples', 'step', 'py_string', 'row', 'eof'];
  for(e in events) {
    var event = events[e];
    if(typeof listener[event] != 'function') {
      "Error. No " + event + " function exists on " + JSON.stringify(listener);
    }
  }
  this.listener = listener;  
};

Lexer.prototype.scan = function(data) {
  var ending = "\n%_FEATURE_END_%";
  if(typeof data == 'string') {
    data = this.stringToBytes(data + ending);
  } else if(typeof Buffer != 'undefined' && Buffer.isBuffer(data)) {
    // Node.js
    var buf = new Buffer(data.length + ending.length);
    data.copy(buf, 0, 0);
    new Buffer(ending).copy(buf, data.length, 0);
    data = buf;
  }
  var eof = pe = data.length;
  var p = 0;

  this.line_number = 1;
  this.last_newline = 0;

  
/* line 606 "js/lib/gherkin/lexer/et.js" */
{
	  this.cs = lexer_start;
} /* JSCodeGen::writeInit */

/* line 153 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/et.js.rl" */
  
/* line 613 "js/lib/gherkin/lexer/et.js" */
{
	var _klen, _trans, _keys, _ps, _widec, _acts, _nacts;
	var _goto_level, _resume, _eof_trans, _again, _test_eof;
	var _out;
	_klen = _trans = _keys = _acts = _nacts = null;
	_goto_level = 0;
	_resume = 10;
	_eof_trans = 15;
	_again = 20;
	_test_eof = 30;
	_out = 40;
	while (true) {
	_trigger_goto = false;
	if (_goto_level <= 0) {
	if (p == pe) {
		_goto_level = _test_eof;
		continue;
	}
	if ( this.cs == 0) {
		_goto_level = _out;
		continue;
	}
	}
	if (_goto_level <= _resume) {
	_keys = _lexer_key_offsets[ this.cs];
	_trans = _lexer_index_offsets[ this.cs];
	_klen = _lexer_single_lengths[ this.cs];
	_break_match = false;
	
	do {
	  if (_klen > 0) {
	     _lower = _keys;
	     _upper = _keys + _klen - 1;

	     while (true) {
	        if (_upper < _lower) { break; }
	        _mid = _lower + ( (_upper - _lower) >> 1 );

	        if ( data[p] < _lexer_trans_keys[_mid]) {
	           _upper = _mid - 1;
	        } else if ( data[p] > _lexer_trans_keys[_mid]) {
	           _lower = _mid + 1;
	        } else {
	           _trans += (_mid - _keys);
	           _break_match = true;
	           break;
	        };
	     } /* while */
	     if (_break_match) { break; }
	     _keys += _klen;
	     _trans += _klen;
	  }
	  _klen = _lexer_range_lengths[ this.cs];
	  if (_klen > 0) {
	     _lower = _keys;
	     _upper = _keys + (_klen << 1) - 2;
	     while (true) {
	        if (_upper < _lower) { break; }
	        _mid = _lower + (((_upper-_lower) >> 1) & ~1);
	        if ( data[p] < _lexer_trans_keys[_mid]) {
	          _upper = _mid - 2;
	         } else if ( data[p] > _lexer_trans_keys[_mid+1]) {
	          _lower = _mid + 2;
	        } else {
	          _trans += ((_mid - _keys) >> 1);
	          _break_match = true;
	          break;
	        }
	     } /* while */
	     if (_break_match) { break; }
	     _trans += _klen
	  }
	} while (false);
	_trans = _lexer_indicies[_trans];
	 this.cs = _lexer_trans_targs[_trans];
	if (_lexer_trans_actions[_trans] != 0) {
		_acts = _lexer_trans_actions[_trans];
		_nacts = _lexer_actions[_acts];
		_acts += 1;
		while (_nacts > 0) {
			_nacts -= 1;
			_acts += 1;
			switch (_lexer_actions[_acts - 1]) {
case 0:
/* line 6 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/et.js.rl" */

    this.content_start = p;
    this.current_line = this.line_number;
    this.start_col = p - this.last_newline - (this.keyword+':').length;
  		break;
case 1:
/* line 12 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/et.js.rl" */

    this.current_line = this.line_number;
    this.start_col = p - this.last_newline;
  		break;
case 2:
/* line 17 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/et.js.rl" */

    this.content_start = p;
  		break;
case 3:
/* line 21 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/et.js.rl" */

    var con = this.unindent(
      this.start_col, 
      this.bytesToString(data.slice(this.content_start, this.next_keyword_start-1)).replace(/(\r?\n)?([\t ])*$/, '').replace(/\\\"\\\"\\\"/mg, '"""')
    );
    this.listener.py_string(con, this.current_line); 
  		break;
case 4:
/* line 29 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/et.js.rl" */

    p = this.store_keyword_content('feature', data, p, eof);
  		break;
case 5:
/* line 33 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/et.js.rl" */

    p = this.store_keyword_content('background', data, p, eof);
  		break;
case 6:
/* line 37 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/et.js.rl" */

    p = this.store_keyword_content('scenario', data, p, eof);
  		break;
case 7:
/* line 41 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/et.js.rl" */

    p = this.store_keyword_content('scenario_outline', data, p, eof);
  		break;
case 8:
/* line 45 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/et.js.rl" */

    p = this.store_keyword_content('examples', data, p, eof);
  		break;
case 9:
/* line 49 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/et.js.rl" */

    var con = this.bytesToString(data.slice(this.content_start, p)).trim();
    this.listener.step(this.keyword, con, this.current_line);
  		break;
case 10:
/* line 54 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/et.js.rl" */

    var con = this.bytesToString(data.slice(this.content_start, p)).trim();
    this.listener.comment(con, this.line_number);
    this.keyword_start = null;
  		break;
case 11:
/* line 60 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/et.js.rl" */

    var con = this.bytesToString(data.slice(this.content_start, p)).trim();
    this.listener.tag(con, this.line_number);
    this.keyword_start = null;
  		break;
case 12:
/* line 66 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/et.js.rl" */

    this.line_number++;
  		break;
case 13:
/* line 70 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/et.js.rl" */

    this.last_newline = p + 1;
  		break;
case 14:
/* line 74 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/et.js.rl" */

    this.keyword_start = this.keyword_start || p;
  		break;
case 15:
/* line 78 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/et.js.rl" */

    this.keyword = this.bytesToString(data.slice(this.keyword_start, p)).replace(/:$/, '');
    this.keyword_start = null;
  		break;
case 16:
/* line 83 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/et.js.rl" */

    this.next_keyword_start = p;
  		break;
case 17:
/* line 87 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/et.js.rl" */

    p = p - 1;
    current_row = [];
    this.current_line = this.line_number;
  		break;
case 18:
/* line 93 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/et.js.rl" */

    this.content_start = p;
  		break;
case 19:
/* line 97 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/et.js.rl" */

    var con = this.bytesToString(data.slice(this.content_start, p)).trim();
    current_row.push(con.replace(/\\\|/, "|").replace(/\\n/, "\n").replace(/\\\\/, "\\"));
  		break;
case 20:
/* line 102 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/et.js.rl" */

    this.listener.row(current_row, this.current_line);
  		break;
case 21:
/* line 106 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/et.js.rl" */

    if(this.cs < lexer_first_final) {
      var content = this.current_line_content(data, p);
      throw "Lexing error on line " + this.line_number + ": '" + content + "'. See http://wiki.github.com/aslakhellesoy/gherkin/lexingerror for more information.";
    } else {
      this.listener.eof();
    }
    
  		break;
/* line 829 "js/lib/gherkin/lexer/et.js" */
			} /* action switch */
		}
	}
	if (_trigger_goto) {
		continue;
	}
	}
	if (_goto_level <= _again) {
	if ( this.cs == 0) {
		_goto_level = _out;
		continue;
	}
	p += 1;
	if (p != pe) {
		_goto_level = _resume;
		continue;
	}
	}
	if (_goto_level <= _test_eof) {
	if (p == eof) {
	__acts = _lexer_eof_actions[ this.cs];
	__nacts =  _lexer_actions[__acts];
	__acts += 1;
	while (__nacts > 0) {
		__nacts -= 1;
		__acts += 1;
		switch (_lexer_actions[__acts - 1]) {
case 21:
/* line 106 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/et.js.rl" */

    if(this.cs < lexer_first_final) {
      var content = this.current_line_content(data, p);
      throw "Lexing error on line " + this.line_number + ": '" + content + "'. See http://wiki.github.com/aslakhellesoy/gherkin/lexingerror for more information.";
    } else {
      this.listener.eof();
    }
    
  		break;
/* line 868 "js/lib/gherkin/lexer/et.js" */
		} /* eof action switch */
	}
	if (_trigger_goto) {
		continue;
	}
}
	}
	if (_goto_level <= _out) {
		break;
	}
	}
	}

/* line 154 "/Users/ahellesoy/scm/gherkin/tasks/../ragel/i18n/et.js.rl" */
};

Lexer.prototype.bytesToString = function(bytes) {
  if(typeof bytes.write == 'function') {
    // Node.js
    return bytes.toString('utf-8');
  } else {
    var result = "";
    for(var b in bytes) {
      result += String.fromCharCode(bytes[b]);
    }
    return result;
  }
};

Lexer.prototype.stringToBytes = function(string) {
  var bytes = [];
  for(var i = 0; i < string.length; i++) {
    bytes[i] = string.charCodeAt(i);
  }
  return bytes;
};

Lexer.prototype.unindent = function(startcol, text) {
  startcol = startcol || 0;
  return text.replace(new RegExp('^[\t ]{0,' + startcol + '}', 'gm'), ''); 
};

Lexer.prototype.store_keyword_content = function(event, data, p, eof) {
  var end_point = (!this.next_keyword_start || (p == eof)) ? p : this.next_keyword_start;
  var content = this.unindent(this.start_col + 2, this.bytesToString(data.slice(this.content_start, end_point))).trimRight();
  var content_lines = content.split("\n")
  var name = content_lines.shift() || "";
  name = name.trim();
  var description = content_lines.join("\n");
  this.listener[event](this.keyword, name, description, this.current_line);
  var nks = this.next_keyword_start;
  this.next_keyword_start = null;
  return nks ? nks - 1 : p;
};

Lexer.prototype.current_line_content = function(data, p) {
  var rest = data.slice(this.last_newline, -1);
  var end = rest.indexOf(10) || -1;
  return this.bytesToString(rest.slice(0, end)).trim();
};

if(typeof exports != 'undefined') {
  exports.Lexer = Lexer;
}
if(typeof window != 'undefined') {
  window.Lexer = Lexer;
}

})();
