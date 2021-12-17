from random import choice
from string import ascii_uppercase


def getUniqueID(len):
    return "".join(choice(ascii_uppercase) for i in range(len))
