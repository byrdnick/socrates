from otree.api import Currency as c, currency_range
from ._builtin import Page, WaitPage
from .models import Constants, Match
from datetime import datetime, timedelta, timezone


class FirstWP(WaitPage):
    template_name = 'second/MatcherWP.html'

    def is_displayed(self):
        now = datetime.now(timezone.utc)
        if not self.player.wp_entrance_time:
            self.player.wp_entrance_time = now
        if not self.player.wp_exit_time:
            self.player.wp_exit_time = now + timedelta(seconds=Constants.sec_to_wait_on_wp)

        return self.player.matched == Match.NOT_YET

    def vars_for_template(self):
        seconds_to_mismatch = (self.player.wp_exit_time - datetime.now(timezone.utc)).total_seconds()
        return dict(seconds_to_mismatch=seconds_to_mismatch,
                    sec_to_min=int(Constants.sec_to_wait_on_wp / 60))

    group_by_arrival_time = True
    after_all_players_arrive = 'set_timer'


class DiscussionPage(Page):
    live_method = 'chat'
    form_model = 'player'
    form_fields = ['answer', 'confidence']

    def is_displayed(self):
        return self.player.matched == Match.MATCHED


class NoMatchingPage(Page):
    def is_displayed(self):
        return  self.player.matched == Match.NOT_MATCHED


page_sequence = [
    FirstWP,
    DiscussionPage,
    NoMatchingPage,
]
