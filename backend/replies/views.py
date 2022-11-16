from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Reply
from .serializers import ReplySerializer
from comments.models import Comment


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_replies(request, commentpk):
    # print('User ', f"{request.user.id} {request.user.email} {request.user.username}")
    comment = get_object_or_404(Comment, pk=commentpk)
    if request.method == 'GET':
        replies = Reply.objects.filter(comment=comment)
        serializer = ReplySerializer(replies, many=True)
        return Response(serializer.data)    
    elif request.method == 'POST':
        serializer = ReplySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(comment_id=commentpk, user_id=request.user.id)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    