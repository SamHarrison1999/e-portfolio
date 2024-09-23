# code source: https://semaphoreci.com/community/tutorials/testing-python-applications-with-pytest
"""Wallet python file"""


class InsufficientAmount(Exception):
    """Insufficient Amount Exception Class"""
    pass


class Wallet(object):
    """Wallet class"""
    def __init__(self, initial_amount: int = 0) -> None:
        """
        Init function
        :param initial_amount: The initial amount of money in the wallet
        """
        self.balance = initial_amount

    def spend_cash(self, amount: int) -> None:
        """Spend money"""
        if self.balance < amount:
            raise InsufficientAmount('Not enough available to spend {}'.format(amount))
        self.balance -= amount

    def add_cash(self, amount: int) -> None:
        """
        Add money
        :param self: The wallet
        :param amount: The amount of money to add
        :return: None
        """
        self.balance += amount
