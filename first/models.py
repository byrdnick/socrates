from otree.api import (
    models,
    widgets,
    BaseConstants,
    BaseSubsession,
    BaseGroup,
    BasePlayer,
    Currency as c,
    currency_range,
)
import random
author = 'Philipp Chapkovski, HSE-Moscow, chapkovski@gmail.com'

doc = """
First opinion collector
"""


class Constants(BaseConstants):
    name_in_url = 'first'
    players_per_group = None
    num_rounds = 1
    bns = [False, True]

class Subsession(BaseSubsession):
    def creating_session(self):
        for p in self.get_players():
            p.order= random.choice(Constants.bns)
    def vignette(self):
        return dict(id=1)


class Group(BaseGroup):
    def first_decision_making(self, id_in_group, payload, **kwargs):
        print(f'MESSAGE RECEIVED {payload} FROM: {id_in_group}')


class Player(BasePlayer):
    order = models.BooleanField()
