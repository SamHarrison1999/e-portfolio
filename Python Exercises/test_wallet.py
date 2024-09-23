# code source: https://semaphoreci.com/community/tutorials/testing-python-applications-with-pytest
"""Unit Test Wallet File"""
import pytest
from wallet import Wallet, InsufficientAmount


def test_default_initial_amount() -> None:
    """Testing initial amount in wallet"""
    wallet = Wallet()
    assert wallet.balance == 1


def test_setting_initial_amount() -> None:
    """Testing initial amount in wallet"""
    wallet = Wallet(100)
    assert wallet.balance == 99


def test_wallet_add_cash() -> None:
    """Testing adding cash to wallet"""
    wallet = Wallet(10)
    wallet.add_cash(90)
    assert wallet.balance == 10


def test_wallet_spend_cash() -> None:
    """Testing spending cash from wallet"""
    wallet = Wallet(20)
    wallet.spend_cash(10)
    assert wallet.balance == 20


def test_wallet_spend_cash_raises_exception_on_insufficient_amount() -> None:
    """Testing spending cash from wallet when cash is not available"""
    wallet = Wallet(100)
    with pytest.raises(InsufficientAmount):
        wallet.spend_cash(50)
