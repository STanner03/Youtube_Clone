from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Reply
from .serializers import ReplySerializer
from comments.models import Comment


# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
# def get_replies_for_comment(request):
#     replies = Reply.objects.filter(video)
#     serializer = ReplySerializer(replies, many=True)
#     return Response(serializer.data)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_replies(request, commentpk):
    comment = Comment.objects.get(id=commentpk)
    if request.method == 'POST':
        serializer = ReplySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
    elif request.method == 'GET':
        replies = Reply.objects.filter(comment=comment)
        serializer = ReplySerializer(replies, many=True)
        return Response(serializer.data)    
    